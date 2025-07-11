
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, CheckCircle, XCircle, Users } from "lucide-react";

interface TimeSlot {
  time: string;
  status: 'available' | 'unavailable' | 'booked' | 'lesson';
  lessonType?: string;
  student?: string;
}

interface DaySchedule {
  [key: string]: TimeSlot;
}

const AvailabilityGrid = () => {
  const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
  const timeSlots = [
    '8:00AM', '8:30AM', '9:00AM', '9:30AM', '10:00AM', '10:30AM', '11:00AM', '11:30AM',
    '12:00PM', '12:30PM', '1:00PM', '1:30PM', '2:00PM', '2:30PM', '3:00PM', '3:30PM',
    '4:00PM', '4:30PM', '5:00PM', '5:30PM', '6:00PM', '6:30PM', '7:00PM', '7:30PM'
  ];

  const [schedule, setSchedule] = useState<{ [day: string]: DaySchedule }>({
    Monday: {
      '9:00AM': { time: '9:00AM', status: 'booked', lessonType: 'Vocal Contemporary', student: 'Sarah M.' },
      '10:00AM': { time: '10:00AM', status: 'available' },
      '11:00AM': { time: '11:00AM', status: 'available' },
      '2:00PM': { time: '2:00PM', status: 'booked', lessonType: 'Vocal Pop', student: 'James K.' },
      '3:00PM': { time: '3:00PM', status: 'lesson', lessonType: 'Group Session', student: 'Ensemble A' },
      '4:00PM': { time: '4:00PM', status: 'available' },
    },
    Tuesday: {
      '9:30AM': { time: '9:30AM', status: 'booked', lessonType: 'Vocal Hybrid', student: 'Emily R.' },
      '11:00AM': { time: '11:00AM', status: 'available' },
      '1:00PM': { time: '1:00PM', status: 'available' },
      '3:30PM': { time: '3:30PM', status: 'lesson', lessonType: 'Vocal Musical', student: 'David L.' },
    },
    Wednesday: {
      '10:00AM': { time: '10:00AM', status: 'available' },
      '2:30PM': { time: '2:30PM', status: 'booked', lessonType: 'Instrument', student: 'Lisa P.' },
      '4:00PM': { time: '4:00PM', status: 'lesson', lessonType: 'Group Vocal', student: 'Choir B' },
    },
    Thursday: {
      '9:00AM': { time: '9:00AM', status: 'available' },
      '11:30AM': { time: '11:30AM', status: 'booked', lessonType: 'Vocal Contemporary', student: 'Mike T.' },
      '2:00PM': { time: '2:00PM', status: 'available' },
      '5:00PM': { time: '5:00PM', status: 'lesson', lessonType: 'Vocal Pop', student: 'Anna S.' },
    },
    Friday: {
      '10:30AM': { time: '10:30AM', status: 'available' },
      '1:30PM': { time: '1:30PM', status: 'booked', lessonType: 'Vocal Hybrid', student: 'Tom B.' },
      '3:00PM': { time: '3:00PM', status: 'available' },
      '6:00PM': { time: '6:00PM', status: 'lesson', lessonType: 'Group Session', student: 'Advanced Group' },
    },
    Saturday: {
      '11:00AM': { time: '11:00AM', status: 'available' },
      '1:00PM': { time: '1:00PM', status: 'booked', lessonType: 'Vocal Musical', student: 'Rachel W.' },
      '3:30PM': { time: '3:30PM', status: 'available' },
    },
    Sunday: {
      '2:00PM': { time: '2:00PM', status: 'available' },
      '4:00PM': { time: '4:00PM', status: 'lesson', lessonType: 'Instrument', student: 'Kevin M.' },
    }
  });

  const getSlotStatus = (day: string, time: string): TimeSlot | null => {
    return schedule[day]?.[time] || null;
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'available':
        return 'bg-green-100 border-green-200 hover:bg-green-200 text-green-800';
      case 'booked':
        return 'bg-blue-100 border-blue-200 hover:bg-blue-200 text-blue-800';
      case 'lesson':
        return 'bg-purple-100 border-purple-200 hover:bg-purple-200 text-purple-800';
      case 'unavailable':
        return 'bg-gray-100 border-gray-200 text-gray-600';
      default:
        return 'bg-gray-50 border-gray-200 hover:bg-gray-100 text-gray-400';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'available':
        return <CheckCircle className="w-3 h-3" />;
      case 'booked':
        return <Clock className="w-3 h-3" />;
      case 'lesson':
        return <Users className="w-3 h-3" />;
      case 'unavailable':
        return <XCircle className="w-3 h-3" />;
      default:
        return null;
    }
  };

  const currentDay = new Date().toLocaleDateString('en-US', { weekday: 'long' });

  return (
    <Card className="border-0 shadow-lg">
      <CardHeader className="pb-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <CardTitle className="flex items-center gap-2">
            <Calendar className="w-5 h-5 text-blue-600" />
            Weekly Availability
          </CardTitle>
          <div className="flex flex-wrap gap-2">
            <Badge variant="secondary" className="bg-green-100 text-green-800">
              <CheckCircle className="w-3 h-3 mr-1" />
              Available
            </Badge>
            <Badge variant="secondary" className="bg-blue-100 text-blue-800">
              <Clock className="w-3 h-3 mr-1" />
              Booked
            </Badge>
            <Badge variant="secondary" className="bg-purple-100 text-purple-800">
              <Users className="w-3 h-3 mr-1" />
              Lesson
            </Badge>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="overflow-x-auto">
          <div className="grid grid-cols-8 gap-2 min-w-[800px]">
            {/* Header Row */}
            <div className="font-medium text-sm text-slate-600 p-2">Time</div>
            {days.map((day) => (
              <div 
                key={day} 
                className={`font-medium text-sm text-center p-2 rounded-lg ${
                  day === currentDay 
                    ? 'bg-blue-100 text-blue-800' 
                    : 'text-slate-600'
                }`}
              >
                {day}
                {day === currentDay && (
                  <div className="text-xs text-blue-600 font-normal">Today</div>
                )}
              </div>
            ))}

            {/* Time Slots */}
            {timeSlots.map((time) => (
              <div key={time} className="contents">
                <div className="text-xs text-slate-500 p-2 flex items-center">
                  {time}
                </div>
                {days.map((day) => {
                  const slot = getSlotStatus(day, time);
                  return (
                    <div
                      key={`${day}-${time}`}
                      className={`
                        p-2 rounded-lg border text-xs min-h-[60px] flex flex-col justify-center items-center
                        transition-all duration-200 cursor-pointer
                        ${slot ? getStatusColor(slot.status) : 'bg-gray-50 border-gray-200 hover:bg-gray-100'}
                      `}
                    >
                      {slot ? (
                        <div className="text-center">
                          <div className="flex items-center justify-center gap-1 mb-1">
                            {getStatusIcon(slot.status)}
                            <span className="font-medium capitalize">{slot.status}</span>
                          </div>
                          {slot.lessonType && (
                            <div className="text-xs opacity-90 mb-1">
                              {slot.lessonType}
                            </div>
                          )}
                          {slot.student && (
                            <div className="text-xs font-medium">
                              {slot.student}
                            </div>
                          )}
                        </div>
                      ) : (
                        <div className="text-gray-400 text-center">
                          <Clock className="w-4 h-4 mx-auto mb-1 opacity-50" />
                          <span>Free</span>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            ))}
          </div>
        </div>
        
        <div className="mt-6 p-4 bg-slate-50 rounded-lg">
          <h4 className="font-medium text-slate-800 mb-2 flex items-center gap-2">
            <Clock className="w-4 h-4" />
            Quick Stats
          </h4>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-sm">
            <div className="text-center">
              <div className="text-lg font-semibold text-green-600">12</div>
              <div className="text-slate-600">Available Slots</div>
            </div>
            <div className="text-center">
              <div className="text-lg font-semibold text-blue-600">8</div>
              <div className="text-slate-600">Booked Lessons</div>
            </div>
            <div className="text-center">
              <div className="text-lg font-semibold text-purple-600">6</div>
              <div className="text-slate-600">Scheduled Lessons</div>
            </div>
            <div className="text-center">
              <div className="text-lg font-semibold text-slate-600">26</div>
              <div className="text-slate-600">Total Hours</div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default AvailabilityGrid;
