
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { 
  Users, 
  Search, 
  Mail, 
  Phone, 
  Calendar, 
  Clock,
  Award,
  TrendingUp,
  MessageCircle
} from "lucide-react";

interface Student {
  id: string;
  name: string;
  email: string;
  phone: string;
  lessonType: string;
  level: string;
  nextLesson: string;
  totalLessons: number;
  status: 'active' | 'inactive' | 'on-hold';
  avatar?: string;
}

const StudentsSection = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [students] = useState<Student[]>([
    {
      id: '1',
      name: 'Sarah Mitchell',
      email: 'sarah.m@email.com',
      phone: '(416) 555-0123',
      lessonType: 'Vocal Contemporary',
      level: 'Intermediate',
      nextLesson: '2024-01-15T10:00:00',
      totalLessons: 24,
      status: 'active'
    },
    {
      id: '2',
      name: 'James Knox',
      email: 'james.k@email.com',
      phone: '(416) 555-0124',
      lessonType: 'Vocal Pop',
      level: 'Beginner',
      nextLesson: '2024-01-15T14:00:00',
      totalLessons: 8,
      status: 'active'
    },
    {
      id: '3',
      name: 'Emily Roberts',
      email: 'emily.r@email.com',
      phone: '(416) 555-0125',
      lessonType: 'Vocal Hybrid',
      level: 'Advanced',
      nextLesson: '2024-01-16T09:30:00',
      totalLessons: 36,
      status: 'active'
    },
    {
      id: '4',
      name: 'David Liu',
      email: 'david.l@email.com',
      phone: '(416) 555-0126',
      lessonType: 'Vocal Musical',
      level: 'Intermediate',
      nextLesson: '2024-01-16T15:30:00',
      totalLessons: 18,
      status: 'on-hold'
    },
    {
      id: '5',
      name: 'Lisa Parker',
      email: 'lisa.p@email.com',
      phone: '(416) 555-0127',
      lessonType: 'Instrument',
      level: 'Beginner',
      nextLesson: '2024-01-17T14:30:00',
      totalLessons: 12,
      status: 'active'
    },
    {
      id: '6',
      name: 'Mike Thompson',
      email: 'mike.t@email.com',
      phone: '(416) 555-0128',
      lessonType: 'Vocal Contemporary',
      level: 'Advanced',
      nextLesson: '2024-01-18T11:30:00',
      totalLessons: 42,
      status: 'inactive'
    }
  ]);

  const filteredStudents = students.filter(student =>
    student.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    student.lessonType.toLowerCase().includes(searchTerm.toLowerCase()) ||
    student.level.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active':
        return 'bg-green-100 text-green-800';
      case 'inactive':
        return 'bg-gray-100 text-gray-800';
      case 'on-hold':
        return 'bg-yellow-100 text-yellow-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getLevelColor = (level: string) => {
    switch (level.toLowerCase()) {
      case 'beginner':
        return 'bg-blue-100 text-blue-800';
      case 'intermediate':
        return 'bg-purple-100 text-purple-800';
      case 'advanced':
        return 'bg-orange-100 text-orange-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const formatNextLesson = (dateString: string) => {
    const date = new Date(dateString);
    return {
      date: date.toLocaleDateString(),
      time: date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };
  };

  const activeStudents = students.filter(s => s.status === 'active').length;
  const totalLessons = students.reduce((sum, s) => sum + s.totalLessons, 0);

  return (
    <div className="space-y-6">
      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <Card className="border-0 shadow-md">
          <CardContent className="p-4">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-blue-100 rounded-lg">
                <Users className="w-5 h-5 text-blue-600" />
              </div>
              <div>
                <div className="text-2xl font-bold text-slate-900">{students.length}</div>
                <div className="text-sm text-slate-600">Total Students</div>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card className="border-0 shadow-md">
          <CardContent className="p-4">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-green-100 rounded-lg">
                <TrendingUp className="w-5 h-5 text-green-600" />
              </div>
              <div>
                <div className="text-2xl font-bold text-slate-900">{activeStudents}</div>
                <div className="text-sm text-slate-600">Active Students</div>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card className="border-0 shadow-md">
          <CardContent className="p-4">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-purple-100 rounded-lg">
                <Award className="w-5 h-5 text-purple-600" />
              </div>
              <div>
                <div className="text-2xl font-bold text-slate-900">{totalLessons}</div>
                <div className="text-sm text-slate-600">Total Lessons</div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Students List */}
      <Card className="border-0 shadow-lg">
        <CardHeader className="pb-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <CardTitle className="flex items-center gap-2">
              <Users className="w-5 h-5 text-blue-600" />
              Student Directory
            </CardTitle>
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-4 h-4" />
              <Input
                placeholder="Search students..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 w-full sm:w-64"
              />
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {filteredStudents.map((student) => {
              const nextLesson = formatNextLesson(student.nextLesson);
              return (
                <div
                  key={student.id}
                  className="p-4 border border-slate-200 rounded-lg hover:shadow-md transition-all duration-200 hover:border-slate-300"
                >
                  <div className="flex flex-col lg:flex-row lg:items-center gap-4">
                    {/* Student Info */}
                    <div className="flex items-center gap-3 flex-1">
                      <Avatar className="w-12 h-12">
                        <AvatarImage src={student.avatar} />
                        <AvatarFallback className="bg-blue-100 text-blue-600 font-semibold">
                          {student.name.split(' ').map(n => n[0]).join('')}
                        </AvatarFallback>
                      </Avatar>
                      <div className="flex-1">
                        <h4 className="font-semibold text-slate-900 mb-1">{student.name}</h4>
                        <div className="flex flex-wrap gap-2 mb-2">
                          <Badge variant="secondary" className={getStatusColor(student.status)}>
                            {student.status.replace('-', ' ')}
                          </Badge>
                          <Badge variant="secondary" className={getLevelColor(student.level)}>
                            {student.level}
                          </Badge>
                          <Badge variant="outline" className="text-slate-600">
                            {student.lessonType}
                          </Badge>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm text-slate-600">
                          <div className="flex items-center gap-2">
                            <Mail className="w-4 h-4" />
                            <span>{student.email}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Phone className="w-4 h-4" />
                            <span>{student.phone}</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Lesson Info */}
                    <div className="flex flex-col sm:flex-row gap-4 lg:gap-6">
                      <div className="text-center">
                        <div className="text-sm text-slate-600 mb-1">Total Lessons</div>
                        <div className="text-lg font-semibold text-slate-900">{student.totalLessons}</div>
                      </div>
                      <div className="text-center">
                        <div className="text-sm text-slate-600 mb-1">Next Lesson</div>
                        <div className="text-sm font-medium text-slate-900">{nextLesson.date}</div>
                        <div className="text-sm text-slate-600">{nextLesson.time}</div>
                      </div>
                    </div>

                    {/* Actions */}
                    <div className="flex gap-2">
                      <Button variant="outline" size="sm" className="hover:shadow-md transition-shadow">
                        <Calendar className="w-4 h-4 mr-2" />
                        Schedule
                      </Button>
                      <Button variant="outline" size="sm" className="hover:shadow-md transition-shadow">
                        <MessageCircle className="w-4 h-4 mr-2" />
                        Message
                      </Button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {filteredStudents.length === 0 && (
            <div className="text-center py-8">
              <Users className="w-12 h-12 text-slate-400 mx-auto mb-3" />
              <p className="text-slate-600">No students found matching your search.</p>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default StudentsSection;
