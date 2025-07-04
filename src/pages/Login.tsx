
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Eye, EyeOff, Leaf } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useAuth } from '@/contexts/AuthContext';

const Login = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    name: '',
    confirmPassword: ''
  });
  const { login, signup, isLoading } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      if (isLogin) {
        await login(formData.email, formData.password);
      } else {
        if (formData.password !== formData.confirmPassword) {
          alert('Passwords do not match');
          return;
        }
        await signup(formData.email, formData.password, formData.name);
      }
      navigate('/account');
    } catch (error) {
      console.error('Authentication error:', error);
    }
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-cellkind-green/10 to-cellkind-peach/10 flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 animate-fade-in">
        {/* Logo and Header */}
        <div className="text-center">
          <Link to="/" className="inline-flex items-center space-x-2 mb-6">
            <div className="bg-cellkind-green p-3 rounded-full">
              <Leaf className="h-8 w-8 text-white" />
            </div>
            <span className="text-3xl font-poppins font-bold text-gray-900">
              CellKind
            </span>
          </Link>
          <h2 className="text-3xl font-poppins font-bold text-gray-900">
            {isLogin ? 'Welcome Back' : 'Join CellKind'}
          </h2>
          <p className="mt-2 text-gray-600">
            {isLogin 
              ? 'Sign in to your wellness account' 
              : 'Start your journey to better health'
            }
          </p>
        </div>

        {/* Form */}
        <div className="wellness-card p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            {!isLogin && (
              <div>
                <Label htmlFor="name">Full Name</Label>
                <Input
                  id="name"
                  type="text"
                  value={formData.name}
                  onChange={(e) => handleInputChange('name', e.target.value)}
                  required={!isLogin}
                  className="mt-1"
                  placeholder="Enter your full name"
                />
              </div>
            )}

            <div>
              <Label htmlFor="email">Email Address</Label>
              <Input
                id="email"
                type="email"
                value={formData.email}
                onChange={(e) => handleInputChange('email', e.target.value)}
                required
                className="mt-1"
                placeholder="Enter your email"
              />
            </div>

            <div>
              <Label htmlFor="password">Password</Label>
              <div className="relative mt-1">
                <Input
                  id="password"
                  type={showPassword ? 'text' : 'password'}
                  value={formData.password}
                  onChange={(e) => handleInputChange('password', e.target.value)}
                  required
                  placeholder="Enter your password"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-3 text-gray-400 hover:text-gray-600"
                >
                  {showPassword ? (
                    <EyeOff className="h-5 w-5" />
                  ) : (
                    <Eye className="h-5 w-5" />
                  )}
                </button>
              </div>
            </div>

            {!isLogin && (
              <div>
                <Label htmlFor="confirmPassword">Confirm Password</Label>
                <Input
                  id="confirmPassword"
                  type="password"
                  value={formData.confirmPassword}
                  onChange={(e) => handleInputChange('confirmPassword', e.target.value)}
                  required={!isLogin}
                  className="mt-1"
                  placeholder="Confirm your password"
                />
              </div>
            )}

            <Button
              type="submit"
              className="wellness-button w-full"
              disabled={isLoading}
            >
              {isLoading ? (
                <div className="flex items-center">
                  <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                  {isLogin ? 'Signing in...' : 'Creating account...'}
                </div>
              ) : (
                isLogin ? 'Sign In' : 'Create Account'
              )}
            </Button>
          </form>

          {/* Toggle between login and signup */}
          <div className="mt-6 text-center">
            <p className="text-gray-600">
              {isLogin ? "Don't have an account? " : "Already have an account? "}
              <button
                type="button"
                onClick={() => setIsLogin(!isLogin)}
                className="text-cellkind-green hover:text-cellkind-green/80 font-medium"
              >
                {isLogin ? 'Sign up' : 'Sign in'}
              </button>
            </p>
          </div>

          {/* Benefits of signing up */}
          {!isLogin && (
            <div className="mt-6 p-4 bg-cellkind-gray rounded-lg">
              <h4 className="font-poppins font-semibold text-gray-900 mb-3">
                Join CellKind and get:
              </h4>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• Exclusive member discounts</li>
                <li>• Personalized wellness recommendations</li>
                <li>• Easy order tracking and history</li>
                <li>• Early access to new products</li>
              </ul>
            </div>
          )}

          {/* Forgot password link for login */}
          {isLogin && (
            <div className="mt-4 text-center">
              <a href="#" className="text-sm text-cellkind-green hover:text-cellkind-green/80">
                Forgot your password?
              </a>
            </div>
          )}
        </div>

        {/* Social login options */}
        <div className="wellness-card p-6">
          <div className="relative mb-6">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-200" />
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="bg-white px-4 text-gray-500">Or continue with</span>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <Button variant="outline" className="w-full">
              Google
            </Button>
            <Button variant="outline" className="w-full">
              Apple
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
