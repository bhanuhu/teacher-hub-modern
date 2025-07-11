
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { 
  User, 
  Mail, 
  Phone, 
  MapPin, 
  Calendar, 
  Edit2, 
  Save, 
  X,
  Home,
  Briefcase
} from "lucide-react";

const TeacherProfile = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [profileData, setProfileData] = useState({
    name: "Alynia Allan",
    role: "Teacher",
    birthDate: "1985-03-15",
    email: "alynia.allan@example.com",
    phone: "(416) 555-9897",
    address: "56 Oakville St Suite 6\nToronto, ON, Canada",
    bio: "Experienced music teacher specializing in vocal training and contemporary music styles."
  });

  const handleSave = () => {
    setIsEditing(false);
    // Here you would typically save to backend
    console.log("Saving profile data:", profileData);
  };

  const handleCancel = () => {
    setIsEditing(false);
    // Reset to original data if needed
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      {/* Personal Details */}
      <Card className="border-0 shadow-lg">
        <CardHeader className="pb-4">
          <div className="flex items-center justify-between">
            <CardTitle className="flex items-center gap-2">
              <User className="w-5 h-5 text-blue-600" />
              Personal Details
            </CardTitle>
            {!isEditing ? (
              <Button 
                variant="outline" 
                size="sm"
                onClick={() => setIsEditing(true)}
                className="hover:shadow-md transition-shadow"
              >
                <Edit2 className="w-4 h-4 mr-2" />
                Edit
              </Button>
            ) : (
              <div className="flex gap-2">
                <Button 
                  variant="outline" 
                  size="sm"
                  onClick={handleCancel}
                  className="hover:shadow-md transition-shadow"
                >
                  <X className="w-4 h-4 mr-2" />
                  Cancel
                </Button>
                <Button 
                  size="sm"
                  onClick={handleSave}
                  className="bg-blue-600 hover:bg-blue-700 hover:shadow-md transition-all"
                >
                  <Save className="w-4 h-4 mr-2" />
                  Save
                </Button>
              </div>
            )}
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="name" className="text-sm font-medium text-slate-700">
                Full Name
              </Label>
              {isEditing ? (
                <Input
                  id="name"
                  value={profileData.name}
                  onChange={(e) => setProfileData({...profileData, name: e.target.value})}
                  className="mt-1"
                />
              ) : (
                <p className="mt-1 text-slate-900 font-medium">{profileData.name}</p>
              )}
            </div>
            <div>
              <Label htmlFor="role" className="text-sm font-medium text-slate-700">
                Role
              </Label>
              {isEditing ? (
                <Input
                  id="role"
                  value={profileData.role}
                  onChange={(e) => setProfileData({...profileData, role: e.target.value})}
                  className="mt-1"
                />
              ) : (
                <div className="mt-1">
                  <Badge variant="secondary" className="bg-blue-100 text-blue-800">
                    <Briefcase className="w-3 h-3 mr-1" />
                    {profileData.role}
                  </Badge>
                </div>
              )}
            </div>
          </div>
          
          <div>
            <Label htmlFor="birthDate" className="text-sm font-medium text-slate-700">
              Birth Date
            </Label>
            {isEditing ? (
              <Input
                id="birthDate"
                type="date"
                value={profileData.birthDate}
                onChange={(e) => setProfileData({...profileData, birthDate: e.target.value})}
                className="mt-1"
              />
            ) : (
              <p className="mt-1 text-slate-900">{new Date(profileData.birthDate).toLocaleDateString()}</p>
            )}
          </div>

          <div>
            <Label htmlFor="bio" className="text-sm font-medium text-slate-700">
              Bio
            </Label>
            {isEditing ? (
              <Textarea
                id="bio"
                value={profileData.bio}
                onChange={(e) => setProfileData({...profileData, bio: e.target.value})}
                className="mt-1"
                rows={3}
              />
            ) : (
              <p className="mt-1 text-slate-700">{profileData.bio}</p>
            )}
          </div>
        </CardContent>
      </Card>

      {/* Contact Information */}
      <Card className="border-0 shadow-lg">
        <CardHeader className="pb-4">
          <CardTitle className="flex items-center gap-2">
            <Mail className="w-5 h-5 text-green-600" />
            Contact Information
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <Label htmlFor="email" className="text-sm font-medium text-slate-700 flex items-center gap-2">
              <Mail className="w-4 h-4" />
              Email
            </Label>
            {isEditing ? (
              <Input
                id="email"
                type="email"
                value={profileData.email}
                onChange={(e) => setProfileData({...profileData, email: e.target.value})}
                className="mt-1"
              />
            ) : (
              <p className="mt-1 text-slate-900">{profileData.email}</p>
            )}
          </div>
          
          <div>
            <Label htmlFor="phone" className="text-sm font-medium text-slate-700 flex items-center gap-2">
              <Phone className="w-4 h-4" />
              Phone
            </Label>
            {isEditing ? (
              <Input
                id="phone"
                value={profileData.phone}
                onChange={(e) => setProfileData({...profileData, phone: e.target.value})}
                className="mt-1"
              />
            ) : (
              <p className="mt-1 text-slate-900">{profileData.phone}</p>
            )}
          </div>
          
          <div>
            <Label htmlFor="address" className="text-sm font-medium text-slate-700 flex items-center gap-2">
              <Home className="w-4 h-4" />
              Address
            </Label>
            {isEditing ? (
              <Textarea
                id="address"
                value={profileData.address}
                onChange={(e) => setProfileData({...profileData, address: e.target.value})}
                className="mt-1"
                rows={3}
              />
            ) : (
              <div className="mt-1 text-slate-900 whitespace-pre-line">{profileData.address}</div>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default TeacherProfile;
