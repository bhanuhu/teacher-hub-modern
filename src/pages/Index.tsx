
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { 
  User, 
  Mail, 
  Phone, 
  MapPin, 
  Calendar, 
  Clock, 
  GraduationCap,
  Edit2,
  Plus,
  Settings,
  BookOpen,
  History,
  MessageCircle
} from "lucide-react";
import TeacherProfile from "@/components/TeacherProfile";
import QualificationsSection from "@/components/QualificationsSection";
import AvailabilityGrid from "@/components/AvailabilityGrid";
import StudentsSection from "@/components/StudentsSection";

const Index = () => {
  const [activeTab, setActiveTab] = useState("profile");

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm border-b border-slate-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg flex items-center justify-center">
                <GraduationCap className="w-5 h-5 text-white" />
              </div>
              <h1 className="text-xl font-semibold text-slate-800">Teacher Management</h1>
            </div>
            <div className="flex items-center space-x-3">
              <Button variant="ghost" size="sm">
                <Settings className="w-4 h-4 mr-2" />
                Settings
              </Button>
              <Avatar className="w-8 h-8">
                <AvatarImage src="/placeholder-avatar.jpg" />
                <AvatarFallback className="bg-blue-100 text-blue-600">AA</AvatarFallback>
              </Avatar>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Teacher Header Card */}
        <Card className="mb-8 overflow-hidden border-0 shadow-lg bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-700">
          <CardContent className="p-6">
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
              <Avatar className="w-20 h-20 border-4 border-white/20">
                <AvatarImage src="/placeholder-avatar.jpg" />
                <AvatarFallback className="bg-white/20 text-white text-xl font-semibold">AA</AvatarFallback>
              </Avatar>
              <div className="flex-1">
                <h2 className="text-2xl font-bold text-white mb-2">Alynia Allan</h2>
                <div className="flex flex-wrap gap-2 mb-3">
                  <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
                    <User className="w-3 h-3 mr-1" />
                    Teacher
                  </Badge>
                  <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
                    <Calendar className="w-3 h-3 mr-1" />
                    Active
                  </Badge>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 text-sm text-white/90">
                  <div className="flex items-center gap-2">
                    <Mail className="w-4 h-4" />
                    <span>alynia.allan@example.com</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Phone className="w-4 h-4" />
                    <span>(416) 555-9897</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4" />
                    <span>Toronto, ON, Canada</span>
                  </div>
                </div>
              </div>
              <Button variant="secondary" className="bg-white/20 text-white border-white/30 hover:bg-white/30">
                <Edit2 className="w-4 h-4 mr-2" />
                Edit Profile
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Main Content Tabs */}
        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
          <TabsList className="grid w-full grid-cols-3 lg:grid-cols-7 h-auto p-1 bg-white/60 backdrop-blur-sm">
            <TabsTrigger value="profile" className="data-[state=active]:bg-white">
              <User className="w-4 h-4 mr-2" />
              <span className="hidden sm:inline">Profile</span>
            </TabsTrigger>
            <TabsTrigger value="qualifications" className="data-[state=active]:bg-white">
              <GraduationCap className="w-4 h-4 mr-2" />
              <span className="hidden sm:inline">Qualifications</span>
            </TabsTrigger>
            <TabsTrigger value="availability" className="data-[state=active]:bg-white">
              <Calendar className="w-4 h-4 mr-2" />
              <span className="hidden sm:inline">Availability</span>
            </TabsTrigger>
            <TabsTrigger value="students" className="data-[state=active]:bg-white">
              <BookOpen className="w-4 h-4 mr-2" />
              <span className="hidden sm:inline">Students</span>
            </TabsTrigger>
            <TabsTrigger value="schedule" className="data-[state=active]:bg-white">
              <Clock className="w-4 h-4 mr-2" />
              <span className="hidden sm:inline">Schedule</span>
            </TabsTrigger>
            <TabsTrigger value="comments" className="data-[state=active]:bg-white">
              <MessageCircle className="w-4 h-4 mr-2" />
              <span className="hidden sm:inline">Comments</span>
            </TabsTrigger>
            <TabsTrigger value="history" className="data-[state=active]:bg-white">
              <History className="w-4 h-4 mr-2" />
              <span className="hidden sm:inline">History</span>
            </TabsTrigger>
          </TabsList>

          <TabsContent value="profile">
            <TeacherProfile />
          </TabsContent>

          <TabsContent value="qualifications">
            <QualificationsSection />
          </TabsContent>

          <TabsContent value="availability">
            <AvailabilityGrid />
          </TabsContent>

          <TabsContent value="students">
            <StudentsSection />
          </TabsContent>

          <TabsContent value="schedule">
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Clock className="w-5 h-5 text-blue-600" />
                  Schedule Management
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600">Schedule management interface coming soon...</p>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="comments">
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MessageCircle className="w-5 h-5 text-blue-600" />
                  Comments & Notes
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600">Comments section coming soon...</p>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="history">
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <History className="w-5 h-5 text-blue-600" />
                  Teaching History
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600">History section coming soon...</p>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Index;
