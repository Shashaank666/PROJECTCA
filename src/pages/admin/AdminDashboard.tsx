import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  Search, 
  Filter, 
  Mail, 
  Phone, 
  Calendar, 
  Bell, 
  LogOut,
  Eye,
  EyeOff,
  Send,
  Plus,
  Edit,
  Trash2,
  User,
  MessageSquare,
  Clock,
  CheckCircle2,
  AlertCircle,
  Building2,
  MapPin,
  Copy,
  ExternalLink,
  Star,
  Tag,
  FileText,
  Briefcase
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { adminAuth } from '../../lib/adminAuth';
import { adminAPI } from '../../lib/adminAPI';
import toast from 'react-hot-toast';

interface Query {
  id: string;
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
  status: 'new' | 'contacted' | 'converted' | 'closed';
  created_at: string;
  updated_at: string;
  is_read: boolean;
}

interface Meeting {
  id: string;
  title: string;
  client_name: string;
  date: string;
  time: string;
  type: string;
  notes?: string;
}

const AdminDashboard = () => {
  const [queries, setQueries] = useState<Query[]>([]);
  const [meetings, setMeetings] = useState<Meeting[]>([]);
  const [filteredQueries, setFilteredQueries] = useState<Query[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');
  const [selectedQuery, setSelectedQuery] = useState<Query | null>(null);
  const [replyMessage, setReplyMessage] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [showReplyModal, setShowReplyModal] = useState(false);
  const [showMeetingModal, setShowMeetingModal] = useState(false);
  const [showQueryDetails, setShowQueryDetails] = useState(false);
  const [newMeeting, setNewMeeting] = useState({
    title: '',
    client_name: '',
    date: '',
    time: '',
    type: 'consultation',
    notes: ''
  });
  const navigate = useNavigate();

  useEffect(() => {
    if (!adminAuth.isAuthenticated()) {
      navigate('/admin/login');
      return;
    }
    loadData();
  }, [navigate]);

  useEffect(() => {
    filterQueries();
  }, [queries, searchTerm, statusFilter]);

  const loadData = async () => {
    try {
      const [queriesData, meetingsData] = await Promise.all([
        adminAPI.getQueries(),
        adminAPI.getMeetings()
      ]);
      setQueries(queriesData);
      setMeetings(meetingsData);
    } catch (error) {
      toast.error('Failed to load data');
    } finally {
      setIsLoading(false);
    }
  };

  const filterQueries = () => {
    let filtered = queries;

    if (searchTerm) {
      filtered = filtered.filter(query =>
        query.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        query.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
        query.service.toLowerCase().includes(searchTerm.toLowerCase()) ||
        query.phone.includes(searchTerm)
      );
    }

    if (statusFilter !== 'all') {
      filtered = filtered.filter(query => query.status === statusFilter);
    }

    setFilteredQueries(filtered);
  };

  const handleLogout = () => {
    adminAuth.logout();
    navigate('/admin/login');
    toast.success('Logged out successfully');
  };

  const markAsRead = async (queryId: string) => {
    try {
      await adminAPI.markQueryAsRead(queryId);
      setQueries(queries.map(q => 
        q.id === queryId ? { ...q, is_read: true } : q
      ));
      toast.success('Marked as read');
    } catch (error) {
      toast.error('Failed to update query');
    }
  };

  const updateQueryStatus = async (queryId: string, status: string) => {
    try {
      await adminAPI.updateQueryStatus(queryId, status);
      setQueries(queries.map(q => 
        q.id === queryId ? { ...q, status: status as any } : q
      ));
      toast.success('Status updated');
    } catch (error) {
      toast.error('Failed to update status');
    }
  };

  const sendReply = async () => {
    if (!selectedQuery || !replyMessage.trim()) return;

    try {
      await adminAPI.sendReply(selectedQuery.email, selectedQuery.name, replyMessage);
      await markAsRead(selectedQuery.id);
      setShowReplyModal(false);
      setReplyMessage('');
      setSelectedQuery(null);
      toast.success('Reply sent successfully');
    } catch (error) {
      toast.error('Failed to send reply');
    }
  };

  const addMeeting = async () => {
    try {
      const meeting = await adminAPI.addMeeting(newMeeting);
      setMeetings([...meetings, meeting]);
      setShowMeetingModal(false);
      setNewMeeting({
        title: '',
        client_name: '',
        date: '',
        time: '',
        type: 'consultation',
        notes: ''
      });
      toast.success('Meeting added successfully');
    } catch (error) {
      toast.error('Failed to add meeting');
    }
  };

  const copyToClipboard = (text: string, type: string) => {
    navigator.clipboard.writeText(text);
    toast.success(`${type} copied to clipboard`);
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'new': return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      case 'contacted': return 'bg-blue-100 text-blue-800 border-blue-200';
      case 'converted': return 'bg-green-100 text-green-800 border-green-200';
      case 'closed': return 'bg-gray-100 text-gray-800 border-gray-200';
      default: return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const getPriorityLevel = (query: Query) => {
    const hoursOld = (Date.now() - new Date(query.created_at).getTime()) / (1000 * 60 * 60);
    if (hoursOld < 2) return { level: 'urgent', color: 'text-red-600', icon: '🔥' };
    if (hoursOld < 24) return { level: 'high', color: 'text-orange-600', icon: '⚡' };
    if (hoursOld < 72) return { level: 'medium', color: 'text-yellow-600', icon: '⏰' };
    return { level: 'low', color: 'text-gray-600', icon: '📋' };
  };

  const unreadCount = queries.filter(q => !q.is_read).length;
  const todayMeetings = meetings.filter(m => 
    new Date(m.date).toDateString() === new Date().toDateString()
  );

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-emerald-600"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <h1 className="text-2xl font-bold text-gray-900">CamphorMind Admin</h1>
              {unreadCount > 0 && (
                <span className="ml-3 bg-red-500 text-white px-2 py-1 rounded-full text-xs animate-pulse">
                  {unreadCount} new inquiries
                </span>
              )}
            </div>
            <div className="flex items-center space-x-4">
              <div className="relative">
                <Bell className="w-6 h-6 text-gray-600" />
                {unreadCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-red-500 text-white rounded-full w-4 h-4 text-xs flex items-center justify-center animate-bounce">
                    {unreadCount}
                  </span>
                )}
              </div>
              <button
                onClick={handleLogout}
                className="flex items-center text-gray-600 hover:text-gray-900 transition-colors duration-200"
              >
                <LogOut className="w-5 h-5 mr-2" />
                Logout
              </button>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Enhanced Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-xl p-6 shadow-sm border-l-4 border-l-emerald-500">
            <div className="flex items-center">
              <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center">
                <MessageSquare className="w-6 h-6 text-emerald-600" />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Total Inquiries</p>
                <p className="text-2xl font-bold text-gray-900">{queries.length}</p>
                <p className="text-xs text-emerald-600">All time</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-sm border-l-4 border-l-red-500">
            <div className="flex items-center">
              <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center">
                <AlertCircle className="w-6 h-6 text-red-600" />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Unread</p>
                <p className="text-2xl font-bold text-gray-900">{unreadCount}</p>
                <p className="text-xs text-red-600">Needs attention</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-sm border-l-4 border-l-green-500">
            <div className="flex items-center">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                <Calendar className="w-6 h-6 text-green-600" />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Today's Meetings</p>
                <p className="text-2xl font-bold text-gray-900">{todayMeetings.length}</p>
                <p className="text-xs text-green-600">Scheduled</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-sm border-l-4 border-l-purple-500">
            <div className="flex items-center">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                <CheckCircle2 className="w-6 h-6 text-purple-600" />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Converted</p>
                <p className="text-2xl font-bold text-gray-900">
                  {queries.filter(q => q.status === 'converted').length}
                </p>
                <p className="text-xs text-purple-600">Success rate</p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Enhanced Queries Section */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl shadow-sm">
              <div className="p-6 border-b border-gray-200">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-4 sm:space-y-0">
                  <h2 className="text-xl font-bold text-gray-900">Client Inquiries & Messages</h2>
                  
                  <div className="flex space-x-4">
                    <div className="relative">
                      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                      <input
                        type="text"
                        placeholder="Search by name, email, phone..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                      />
                    </div>
                    
                    <select
                      value={statusFilter}
                      onChange={(e) => setStatusFilter(e.target.value)}
                      className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                    >
                      <option value="all">All Status</option>
                      <option value="new">New</option>
                      <option value="contacted">Contacted</option>
                      <option value="converted">Converted</option>
                      <option value="closed">Closed</option>
                    </select>
                  </div>
                </div>
              </div>

              <div className="divide-y divide-gray-200 max-h-96 overflow-y-auto">
                {filteredQueries.map((query) => {
                  const priority = getPriorityLevel(query);
                  return (
                    <div
                      key={query.id}
                      className={`p-6 hover:bg-gray-50 transition-colors duration-200 cursor-pointer ${
                        !query.is_read ? 'bg-emerald-50 border-l-4 border-l-emerald-500' : ''
                      }`}
                      onClick={() => {
                        setSelectedQuery(query);
                        setShowQueryDetails(true);
                        if (!query.is_read) markAsRead(query.id);
                      }}
                    >
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <div className="flex items-center space-x-3 mb-3">
                            <h3 className="text-lg font-semibold text-gray-900">{query.name}</h3>
                            {!query.is_read && (
                              <span className="bg-emerald-100 text-emerald-800 px-2 py-1 rounded-full text-xs font-medium animate-pulse">
                                New
                              </span>
                            )}
                            <span className={`px-2 py-1 rounded-full text-xs font-medium border ${getStatusColor(query.status)}`}>
                              {query.status}
                            </span>
                            <span className={`${priority.color} text-xs font-medium flex items-center`}>
                              {priority.icon} {priority.level}
                            </span>
                          </div>
                          
                          {/* Enhanced Contact Information */}
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-4">
                            <div className="flex items-center text-sm text-gray-600">
                              <Mail className="w-4 h-4 mr-2 text-blue-500" />
                              <span className="truncate">{query.email}</span>
                              <button
                                onClick={(e) => {
                                  e.stopPropagation();
                                  copyToClipboard(query.email, 'Email');
                                }}
                                className="ml-2 text-gray-400 hover:text-gray-600"
                              >
                                <Copy className="w-3 h-3" />
                              </button>
                            </div>
                            <div className="flex items-center text-sm text-gray-600">
                              <Phone className="w-4 h-4 mr-2 text-green-500" />
                              <span>{query.phone}</span>
                              <button
                                onClick={(e) => {
                                  e.stopPropagation();
                                  copyToClipboard(query.phone, 'Phone');
                                }}
                                className="ml-2 text-gray-400 hover:text-gray-600"
                              >
                                <Copy className="w-3 h-3" />
                              </button>
                            </div>
                          </div>

                          <div className="flex items-center text-sm text-gray-600 mb-3">
                            <Briefcase className="w-4 h-4 mr-2 text-purple-500" />
                            <span className="font-medium">{query.service}</span>
                          </div>
                          
                          <p className="text-gray-700 mb-4 line-clamp-2 bg-gray-50 p-3 rounded-lg italic">
                            "{query.message}"
                          </p>
                          
                          <div className="flex items-center justify-between text-xs text-gray-500">
                            <div className="flex items-center">
                              <Clock className="w-3 h-3 mr-1" />
                              {new Date(query.created_at).toLocaleDateString()} at {new Date(query.created_at).toLocaleTimeString()}
                            </div>
                            <div className="flex items-center space-x-2">
                              <span className="text-emerald-600 font-medium">Click to view details</span>
                              <ExternalLink className="w-3 h-3" />
                            </div>
                          </div>
                        </div>
                        
                        <div className="flex flex-col space-y-2 ml-4">
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              window.open(`tel:${query.phone}`, '_self');
                            }}
                            className="flex items-center px-3 py-1 text-xs bg-green-100 text-green-700 rounded-md hover:bg-green-200 transition-colors duration-200"
                          >
                            <Phone className="w-3 h-3 mr-1" />
                            Call
                          </button>
                          
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              window.open(`mailto:${query.email}`, '_blank');
                            }}
                            className="flex items-center px-3 py-1 text-xs bg-blue-100 text-blue-700 rounded-md hover:bg-blue-200 transition-colors duration-200"
                          >
                            <Mail className="w-3 h-3 mr-1" />
                            Email
                          </button>
                          
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              setSelectedQuery(query);
                              setShowReplyModal(true);
                            }}
                            className="flex items-center px-3 py-1 text-xs bg-purple-100 text-purple-700 rounded-md hover:bg-purple-200 transition-colors duration-200"
                          >
                            <Send className="w-3 h-3 mr-1" />
                            Reply
                          </button>
                          
                          <select
                            value={query.status}
                            onChange={(e) => {
                              e.stopPropagation();
                              updateQueryStatus(query.id, e.target.value);
                            }}
                            className="text-xs border border-gray-300 rounded-md px-2 py-1"
                          >
                            <option value="new">New</option>
                            <option value="contacted">Contacted</option>
                            <option value="converted">Converted</option>
                            <option value="closed">Closed</option>
                          </select>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Meetings Section */}
          <div>
            <div className="bg-white rounded-xl shadow-sm">
              <div className="p-6 border-b border-gray-200">
                <div className="flex items-center justify-between">
                  <h2 className="text-xl font-bold text-gray-900">Upcoming Meetings</h2>
                  <button
                    onClick={() => setShowMeetingModal(true)}
                    className="flex items-center px-3 py-2 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-colors duration-200"
                  >
                    <Plus className="w-4 h-4 mr-2" />
                    Add Meeting
                  </button>
                </div>
              </div>

              <div className="divide-y divide-gray-200 max-h-96 overflow-y-auto">
                {meetings.slice(0, 10).map((meeting) => (
                  <div key={meeting.id} className="p-4">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <h3 className="font-semibold text-gray-900">{meeting.title}</h3>
                        <p className="text-sm text-gray-600">{meeting.client_name}</p>
                        <div className="flex items-center text-xs text-gray-500 mt-1">
                          <Calendar className="w-3 h-3 mr-1" />
                          {new Date(meeting.date).toLocaleDateString()} at {meeting.time}
                        </div>
                        <span className="inline-block mt-2 px-2 py-1 bg-purple-100 text-purple-800 text-xs rounded-full">
                          {meeting.type}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Query Details Modal */}
      {showQueryDetails && selectedQuery && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white rounded-xl p-6 w-full max-w-4xl max-h-[90vh] overflow-y-auto"
          >
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-2xl font-bold text-gray-900">Client Inquiry Details</h3>
              <button
                onClick={() => setShowQueryDetails(false)}
                className="text-gray-400 hover:text-gray-600 text-2xl"
              >
                ×
              </button>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Client Information */}
              <div className="space-y-6">
                <div className="bg-gradient-to-r from-emerald-50 to-teal-50 rounded-xl p-6">
                  <h4 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
                    <User className="w-5 h-5 mr-2 text-emerald-600" />
                    Client Information
                  </h4>
                  
                  <div className="space-y-4">
                    <div>
                      <label className="text-sm font-medium text-gray-600">Full Name</label>
                      <p className="text-lg font-semibold text-gray-900">{selectedQuery.name}</p>
                    </div>
                    
                    <div>
                      <label className="text-sm font-medium text-gray-600">Email Address</label>
                      <div className="flex items-center space-x-2">
                        <p className="text-gray-900">{selectedQuery.email}</p>
                        <button
                          onClick={() => copyToClipboard(selectedQuery.email, 'Email')}
                          className="text-gray-400 hover:text-gray-600"
                        >
                          <Copy className="w-4 h-4" />
                        </button>
                        <button
                          onClick={() => window.open(`mailto:${selectedQuery.email}`, '_blank')}
                          className="text-blue-500 hover:text-blue-700"
                        >
                          <ExternalLink className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                    
                    <div>
                      <label className="text-sm font-medium text-gray-600">Phone Number</label>
                      <div className="flex items-center space-x-2">
                        <p className="text-gray-900">{selectedQuery.phone}</p>
                        <button
                          onClick={() => copyToClipboard(selectedQuery.phone, 'Phone')}
                          className="text-gray-400 hover:text-gray-600"
                        >
                          <Copy className="w-4 h-4" />
                        </button>
                        <button
                          onClick={() => window.open(`tel:${selectedQuery.phone}`, '_self')}
                          className="text-green-500 hover:text-green-700"
                        >
                          <Phone className="w-4 h-4" />
                        </button>
                        <button
                          onClick={() => window.open(`https://wa.me/${selectedQuery.phone.replace(/\D/g, '')}`, '_blank')}
                          className="text-green-500 hover:text-green-700"
                        >
                          <MessageSquare className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                    
                    <div>
                      <label className="text-sm font-medium text-gray-600">Service Interested</label>
                      <p className="text-gray-900 font-medium">{selectedQuery.service}</p>
                    </div>
                  </div>
                </div>

                {/* Quick Actions */}
                <div className="bg-gray-50 rounded-xl p-6">
                  <h4 className="text-lg font-bold text-gray-900 mb-4">Quick Actions</h4>
                  <div className="grid grid-cols-2 gap-3">
                    <button
                      onClick={() => window.open(`tel:${selectedQuery.phone}`, '_self')}
                      className="flex items-center justify-center px-4 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors duration-200"
                    >
                      <Phone className="w-4 h-4 mr-2" />
                      Call Now
                    </button>
                    <button
                      onClick={() => window.open(`mailto:${selectedQuery.email}`, '_blank')}
                      className="flex items-center justify-center px-4 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200"
                    >
                      <Mail className="w-4 h-4 mr-2" />
                      Send Email
                    </button>
                    <button
                      onClick={() => window.open(`https://wa.me/${selectedQuery.phone.replace(/\D/g, '')}?text=Hello ${selectedQuery.name}, Thank you for your inquiry about ${selectedQuery.service}. I would like to discuss your requirements.`, '_blank')}
                      className="flex items-center justify-center px-4 py-3 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors duration-200"
                    >
                      <MessageSquare className="w-4 h-4 mr-2" />
                      WhatsApp
                    </button>
                    <button
                      onClick={() => {
                        setShowReplyModal(true);
                        setShowQueryDetails(false);
                      }}
                      className="flex items-center justify-center px-4 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors duration-200"
                    >
                      <Send className="w-4 h-4 mr-2" />
                      Send Reply
                    </button>
                  </div>
                </div>
              </div>

              {/* Message & Details */}
              <div className="space-y-6">
                <div className="bg-blue-50 rounded-xl p-6">
                  <h4 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
                    <MessageSquare className="w-5 h-5 mr-2 text-blue-600" />
                    Client Message
                  </h4>
                  <div className="bg-white rounded-lg p-4 border-l-4 border-l-blue-500">
                    <p className="text-gray-800 leading-relaxed whitespace-pre-wrap">{selectedQuery.message}</p>
                  </div>
                </div>

                <div className="bg-gray-50 rounded-xl p-6">
                  <h4 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
                    <FileText className="w-5 h-5 mr-2 text-gray-600" />
                    Inquiry Details
                  </h4>
                  
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Status:</span>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium border ${getStatusColor(selectedQuery.status)}`}>
                        {selectedQuery.status}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Submitted:</span>
                      <span className="text-gray-900">{new Date(selectedQuery.created_at).toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Last Updated:</span>
                      <span className="text-gray-900">{new Date(selectedQuery.updated_at).toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Priority:</span>
                      <span className={`${getPriorityLevel(selectedQuery).color} font-medium`}>
                        {getPriorityLevel(selectedQuery).icon} {getPriorityLevel(selectedQuery).level}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Status Update */}
                <div className="bg-yellow-50 rounded-xl p-6">
                  <h4 className="text-lg font-bold text-gray-900 mb-4">Update Status</h4>
                  <select
                    value={selectedQuery.status}
                    onChange={(e) => updateQueryStatus(selectedQuery.id, e.target.value)}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                  >
                    <option value="new">New</option>
                    <option value="contacted">Contacted</option>
                    <option value="converted">Converted</option>
                    <option value="closed">Closed</option>
                  </select>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}

      {/* Reply Modal */}
      {showReplyModal && selectedQuery && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white rounded-xl p-6 w-full max-w-2xl"
          >
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xl font-bold text-gray-900">Reply to {selectedQuery.name}</h3>
              <button
                onClick={() => setShowReplyModal(false)}
                className="text-gray-400 hover:text-gray-600"
              >
                ×
              </button>
            </div>
            
            <div className="mb-4 p-4 bg-gray-50 rounded-lg">
              <p className="text-sm text-gray-600 mb-2">Original Message:</p>
              <p className="text-gray-800">{selectedQuery.message}</p>
            </div>
            
            <textarea
              value={replyMessage}
              onChange={(e) => setReplyMessage(e.target.value)}
              placeholder="Type your reply..."
              className="w-full h-32 p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
            />
            
            <div className="flex justify-end space-x-3 mt-4">
              <button
                onClick={() => setShowReplyModal(false)}
                className="px-4 py-2 text-gray-600 hover:text-gray-800 transition-colors duration-200"
              >
                Cancel
              </button>
              <button
                onClick={sendReply}
                className="px-4 py-2 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-colors duration-200"
              >
                Send Reply
              </button>
            </div>
          </motion.div>
        </div>
      )}

      {/* Add Meeting Modal */}
      {showMeetingModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white rounded-xl p-6 w-full max-w-md"
          >
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xl font-bold text-gray-900">Add New Meeting</h3>
              <button
                onClick={() => setShowMeetingModal(false)}
                className="text-gray-400 hover:text-gray-600"
              >
                ×
              </button>
            </div>
            
            <div className="space-y-4">
              <input
                type="text"
                placeholder="Meeting Title"
                value={newMeeting.title}
                onChange={(e) => setNewMeeting({...newMeeting, title: e.target.value})}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
              />
              
              <input
                type="text"
                placeholder="Client Name"
                value={newMeeting.client_name}
                onChange={(e) => setNewMeeting({...newMeeting, client_name: e.target.value})}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
              />
              
              <input
                type="date"
                value={newMeeting.date}
                onChange={(e) => setNewMeeting({...newMeeting, date: e.target.value})}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
              />
              
              <input
                type="time"
                value={newMeeting.time}
                onChange={(e) => setNewMeeting({...newMeeting, time: e.target.value})}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
              />
              
              <select
                value={newMeeting.type}
                onChange={(e) => setNewMeeting({...newMeeting, type: e.target.value})}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
              >
                <option value="consultation">Consultation</option>
                <option value="follow-up">Follow-up</option>
                <option value="document-review">Document Review</option>
                <option value="signing">Document Signing</option>
              </select>
              
              <textarea
                placeholder="Notes (optional)"
                value={newMeeting.notes}
                onChange={(e) => setNewMeeting({...newMeeting, notes: e.target.value})}
                className="w-full h-20 p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
              />
            </div>
            
            <div className="flex justify-end space-x-3 mt-6">
              <button
                onClick={() => setShowMeetingModal(false)}
                className="px-4 py-2 text-gray-600 hover:text-gray-800 transition-colors duration-200"
              >
                Cancel
              </button>
              <button
                onClick={addMeeting}
                className="px-4 py-2 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-colors duration-200"
              >
                Add Meeting
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </div>
  );
};

export default AdminDashboard;