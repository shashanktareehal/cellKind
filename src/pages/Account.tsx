
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { User, Package, Settings, LogOut, Heart } from 'lucide-react';
import Header from '@/components/Layout/Header';
import Footer from '@/components/Layout/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useAuth } from '@/contexts/AuthContext';

const Account = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('profile');
  const [profileData, setProfileData] = useState({
    name: user?.name || '',
    email: user?.email || '',
    phone: '',
    address: '',
    city: '',
    state: '',
    zipCode: ''
  });

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  const handleProfileUpdate = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Profile updated successfully!');
  };

  const orderHistory = [
    {
      id: 'ORD-001',
      date: '2024-01-15',
      total: 67.98,
      status: 'Delivered',
      items: ['Berry Immunity Boost Shake', 'Green Detox Power Block']
    },
    {
      id: 'ORD-002',
      date: '2024-01-28',
      total: 94.97,
      status: 'Shipped',
      items: ['Tropical Energy Shake', 'Gut Health Probiotic Block', 'Citrus Vitamin C Shake']
    }
  ];

  const tabs = [
    { id: 'profile', label: 'Profile', icon: User },
    { id: 'orders', label: 'Orders', icon: Package },
    { id: 'wishlist', label: 'Wishlist', icon: Heart },
    { id: 'settings', label: 'Settings', icon: Settings }
  ];

  if (!user) {
    navigate('/login');
    return null;
  }

  return (
    <div className="min-h-screen bg-cellkind-cream">
      <Header />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-8 animate-fade-in">
          <h1 className="text-4xl font-poppins font-bold text-gray-900 mb-2">
            Welcome back, {user.name}!
          </h1>
          <p className="text-gray-600">
            Manage your account, orders, and wellness preferences.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar Navigation */}
          <div className="wellness-card p-6 h-fit animate-slide-up">
            <nav className="space-y-2">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg text-left transition-colors ${
                    activeTab === tab.id
                      ? 'bg-cellkind-green text-white'
                      : 'text-gray-700 hover:bg-cellkind-green/10 hover:text-cellkind-green'
                  }`}
                >
                  <tab.icon className="h-5 w-5" />
                  <span className="font-medium">{tab.label}</span>
                </button>
              ))}
              
              <button
                onClick={handleLogout}
                className="w-full flex items-center space-x-3 px-4 py-3 rounded-lg text-left text-red-600 hover:bg-red-50 transition-colors mt-4 border-t border-gray-200 pt-4"
              >
                <LogOut className="h-5 w-5" />
                <span className="font-medium">Log Out</span>
              </button>
            </nav>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3 animate-slide-up" style={{ animationDelay: '0.1s' }}>
            {/* Profile Tab */}
            {activeTab === 'profile' && (
              <div className="wellness-card p-8">
                <h2 className="text-2xl font-poppins font-bold text-gray-900 mb-6">
                  Profile Information
                </h2>
                
                <form onSubmit={handleProfileUpdate} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="name">Full Name</Label>
                      <Input
                        id="name"
                        value={profileData.name}
                        onChange={(e) => setProfileData({...profileData, name: e.target.value})}
                        className="mt-1"
                      />
                    </div>
                    <div>
                      <Label htmlFor="email">Email Address</Label>
                      <Input
                        id="email"
                        type="email"
                        value={profileData.email}
                        onChange={(e) => setProfileData({...profileData, email: e.target.value})}
                        className="mt-1"
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input
                      id="phone"
                      value={profileData.phone}
                      onChange={(e) => setProfileData({...profileData, phone: e.target.value})}
                      className="mt-1"
                      placeholder="(555) 123-4567"
                    />
                  </div>

                  <div>
                    <Label htmlFor="address">Address</Label>
                    <Input
                      id="address"
                      value={profileData.address}
                      onChange={(e) => setProfileData({...profileData, address: e.target.value})}
                      className="mt-1"
                      placeholder="123 Main Street"
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div>
                      <Label htmlFor="city">City</Label>
                      <Input
                        id="city"
                        value={profileData.city}
                        onChange={(e) => setProfileData({...profileData, city: e.target.value})}
                        className="mt-1"
                      />
                    </div>
                    <div>
                      <Label htmlFor="state">State</Label>
                      <Input
                        id="state"
                        value={profileData.state}
                        onChange={(e) => setProfileData({...profileData, state: e.target.value})}
                        className="mt-1"
                      />
                    </div>
                    <div>
                      <Label htmlFor="zipCode">ZIP Code</Label>
                      <Input
                        id="zipCode"
                        value={profileData.zipCode}
                        onChange={(e) => setProfileData({...profileData, zipCode: e.target.value})}
                        className="mt-1"
                      />
                    </div>
                  </div>

                  <Button type="submit" className="wellness-button">
                    Update Profile
                  </Button>
                </form>
              </div>
            )}

            {/* Orders Tab */}
            {activeTab === 'orders' && (
              <div className="wellness-card p-8">
                <h2 className="text-2xl font-poppins font-bold text-gray-900 mb-6">
                  Order History
                </h2>
                
                <div className="space-y-6">
                  {orderHistory.map((order) => (
                    <div key={order.id} className="border border-gray-200 rounded-lg p-6">
                      <div className="flex items-center justify-between mb-4">
                        <div>
                          <h3 className="font-poppins font-semibold text-gray-900">
                            Order {order.id}
                          </h3>
                          <p className="text-gray-600">
                            Placed on {new Date(order.date).toLocaleDateString()}
                          </p>
                        </div>
                        <div className="text-right">
                          <div className="text-xl font-bold text-gray-900">
                            ${order.total}
                          </div>
                          <div className={`text-sm font-medium ${
                            order.status === 'Delivered' ? 'text-green-600' : 'text-blue-600'
                          }`}>
                            {order.status}
                          </div>
                        </div>
                      </div>
                      
                      <div className="mb-4">
                        <h4 className="font-medium text-gray-900 mb-2">Items:</h4>
                        <ul className="list-disc list-inside text-gray-600">
                          {order.items.map((item, index) => (
                            <li key={index}>{item}</li>
                          ))}
                        </ul>
                      </div>

                      <div className="flex space-x-3">
                        <Button variant="outline" size="sm">
                          View Details
                        </Button>
                        <Button variant="outline" size="sm">
                          Track Order
                        </Button>
                        <Button variant="outline" size="sm">
                          Reorder
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Wishlist Tab */}
            {activeTab === 'wishlist' && (
              <div className="wellness-card p-8">
                <h2 className="text-2xl font-poppins font-bold text-gray-900 mb-6">
                  My Wishlist
                </h2>
                
                <div className="text-center py-12">
                  <Heart className="h-16 w-16 text-gray-300 mx-auto mb-4" />
                  <h3 className="text-xl font-poppins font-semibold text-gray-900 mb-2">
                    Your wishlist is empty
                  </h3>
                  <p className="text-gray-600 mb-6">
                    Save your favorite products for later by clicking the heart icon.
                  </p>
                  <Button 
                    className="wellness-button"
                    onClick={() => navigate('/shop')}
                  >
                    Browse Products
                  </Button>
                </div>
              </div>
            )}

            {/* Settings Tab */}
            {activeTab === 'settings' && (
              <div className="wellness-card p-8">
                <h2 className="text-2xl font-poppins font-bold text-gray-900 mb-6">
                  Account Settings
                </h2>
                
                <div className="space-y-6">
                  <div className="border-b border-gray-200 pb-6">
                    <h3 className="font-poppins font-semibold text-gray-900 mb-4">
                      Notifications
                    </h3>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <div>
                          <h4 className="font-medium text-gray-900">Order Updates</h4>
                          <p className="text-sm text-gray-600">Get notified about your order status</p>
                        </div>
                        <Button variant="outline" size="sm">
                          On
                        </Button>
                      </div>
                      <div className="flex items-center justify-between">
                        <div>
                          <h4 className="font-medium text-gray-900">Wellness Tips</h4>
                          <p className="text-sm text-gray-600">Receive personalized wellness advice</p>
                        </div>
                        <Button variant="outline" size="sm">
                          On
                        </Button>
                      </div>
                      <div className="flex items-center justify-between">
                        <div>
                          <h4 className="font-medium text-gray-900">Product Updates</h4>
                          <p className="text-sm text-gray-600">Learn about new products and offers</p>
                        </div>
                        <Button variant="outline" size="sm">
                          Off
                        </Button>
                      </div>
                    </div>
                  </div>

                  <div className="border-b border-gray-200 pb-6">
                    <h3 className="font-poppins font-semibold text-gray-900 mb-4">
                      Privacy
                    </h3>
                    <div className="space-y-3">
                      <Button variant="outline" className="w-full justify-start">
                        Download My Data
                      </Button>
                      <Button variant="outline" className="w-full justify-start">
                        Privacy Settings
                      </Button>
                    </div>
                  </div>

                  <div>
                    <h3 className="font-poppins font-semibold text-gray-900 mb-4">
                      Account Actions
                    </h3>
                    <div className="space-y-3">
                      <Button variant="outline" className="w-full justify-start">
                        Change Password
                      </Button>
                      <Button 
                        variant="outline" 
                        className="w-full justify-start text-red-600 border-red-200 hover:bg-red-50"
                      >
                        Delete Account
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Account;
