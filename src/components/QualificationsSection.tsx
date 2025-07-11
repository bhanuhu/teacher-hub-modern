
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { 
  GraduationCap, 
  Plus, 
  Edit2, 
  Trash2, 
  Users,
  Award,
  DollarSign
} from "lucide-react";

interface Qualification {
  id: string;
  name: string;
  rate: number;
  type: 'private' | 'group';
}

const QualificationsSection = () => {
  const [privateQualifications, setPrivateQualifications] = useState<Qualification[]>([
    { id: '1', name: 'Vocal Contemporary', rate: 35.00, type: 'private' },
    { id: '2', name: 'Vocal Musical', rate: 35.00, type: 'private' },
    { id: '3', name: 'Vocal Hybrid', rate: 35.00, type: 'private' },
    { id: '4', name: 'Vocal Pop', rate: 35.00, type: 'private' },
    { id: '5', name: 'Instrument', rate: 35.00, type: 'private' },
  ]);

  const [groupQualifications, setGroupQualifications] = useState<Qualification[]>([
    { id: '6', name: 'Group Vocal Training', rate: 25.00, type: 'group' },
    { id: '7', name: 'Ensemble Coaching', rate: 30.00, type: 'group' },
  ]);

  const [isAddingPrivate, setIsAddingPrivate] = useState(false);
  const [isAddingGroup, setIsAddingGroup] = useState(false);
  const [newQualification, setNewQualification] = useState({ name: '', rate: '' });

  const handleAddQualification = (type: 'private' | 'group') => {
    if (!newQualification.name || !newQualification.rate) return;

    const qualification: Qualification = {
      id: Date.now().toString(),
      name: newQualification.name,
      rate: parseFloat(newQualification.rate),
      type
    };

    if (type === 'private') {
      setPrivateQualifications([...privateQualifications, qualification]);
      setIsAddingPrivate(false);
    } else {
      setGroupQualifications([...groupQualifications, qualification]);
      setIsAddingGroup(false);
    }

    setNewQualification({ name: '', rate: '' });
  };

  const handleDeleteQualification = (id: string, type: 'private' | 'group') => {
    if (type === 'private') {
      setPrivateQualifications(privateQualifications.filter(q => q.id !== id));
    } else {
      setGroupQualifications(groupQualifications.filter(q => q.id !== id));
    }
  };

  const QualificationCard = ({ qualification, onDelete }: { qualification: Qualification, onDelete: () => void }) => (
    <div className="group p-4 border border-slate-200 rounded-lg hover:shadow-md transition-all duration-200 hover:border-slate-300">
      <div className="flex items-center justify-between">
        <div className="flex-1">
          <h4 className="font-medium text-slate-900 mb-1">{qualification.name}</h4>
          <div className="flex items-center gap-2">
            <Badge 
              variant="secondary" 
              className={`${qualification.type === 'private' ? 'bg-blue-100 text-blue-800' : 'bg-green-100 text-green-800'}`}
            >
              {qualification.type === 'private' ? (
                <>
                  <Award className="w-3 h-3 mr-1" />
                  Private
                </>
              ) : (
                <>
                  <Users className="w-3 h-3 mr-1" />
                  Group
                </>
              )}
            </Badge>
            <span className="text-sm font-semibold text-slate-700 flex items-center gap-1">
              <DollarSign className="w-3 h-3" />
              ${qualification.rate.toFixed(2)}/hr
            </span>
          </div>
        </div>
        <div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
          <Button variant="ghost" size="sm" className="h-8 w-8 p-0 hover:bg-blue-100">
            <Edit2 className="w-4 h-4 text-blue-600" />
          </Button>
          <Button 
            variant="ghost" 
            size="sm" 
            className="h-8 w-8 p-0 hover:bg-red-100"
            onClick={onDelete}
          >
            <Trash2 className="w-4 h-4 text-red-600" />
          </Button>
        </div>
      </div>
    </div>
  );

  const AddQualificationForm = ({ 
    isVisible, 
    onAdd, 
    onCancel 
  }: { 
    isVisible: boolean, 
    onAdd: () => void, 
    onCancel: () => void 
  }) => {
    if (!isVisible) return null;

    return (
      <div className="p-4 border-2 border-dashed border-slate-300 rounded-lg bg-slate-50">
        <div className="space-y-3">
          <div>
            <Label htmlFor="qualName" className="text-sm font-medium">
              Qualification Name
            </Label>
            <Input
              id="qualName"
              value={newQualification.name}
              onChange={(e) => setNewQualification({...newQualification, name: e.target.value})}
              placeholder="e.g., Vocal Contemporary"
              className="mt-1"
            />
          </div>
          <div>
            <Label htmlFor="qualRate" className="text-sm font-medium">
              Rate per Hour ($)
            </Label>
            <Input
              id="qualRate"
              type="number"
              step="0.01"
              value={newQualification.rate}
              onChange={(e) => setNewQualification({...newQualification, rate: e.target.value})}
              placeholder="35.00"
              className="mt-1"
            />
          </div>
          <div className="flex gap-2">
            <Button onClick={onAdd} size="sm" className="bg-blue-600 hover:bg-blue-700">
              Add Qualification
            </Button>
            <Button onClick={onCancel} variant="outline" size="sm">
              Cancel
            </Button>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="space-y-6">
      {/* Private Qualifications */}
      <Card className="border-0 shadow-lg">
        <CardHeader className="pb-4">
          <div className="flex items-center justify-between">
            <CardTitle className="flex items-center gap-2">
              <Award className="w-5 h-5 text-blue-600" />
              Private Qualifications
            </CardTitle>
            <Button 
              variant="outline" 
              size="sm"
              onClick={() => setIsAddingPrivate(true)}
              className="hover:shadow-md transition-shadow"
            >
              <Plus className="w-4 h-4 mr-2" />
              Add Qualification
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {privateQualifications.map((qualification) => (
              <QualificationCard 
                key={qualification.id} 
                qualification={qualification}
                onDelete={() => handleDeleteQualification(qualification.id, 'private')}
              />
            ))}
            <AddQualificationForm 
              isVisible={isAddingPrivate}
              onAdd={() => handleAddQualification('private')}
              onCancel={() => {
                setIsAddingPrivate(false);
                setNewQualification({ name: '', rate: '' });
              }}
            />
          </div>
        </CardContent>
      </Card>

      {/* Group Qualifications */}
      <Card className="border-0 shadow-lg">
        <CardHeader className="pb-4">
          <div className="flex items-center justify-between">
            <CardTitle className="flex items-center gap-2">
              <Users className="w-5 h-5 text-green-600" />
              Group Qualifications
            </CardTitle>
            <Button 
              variant="outline" 
              size="sm"
              onClick={() => setIsAddingGroup(true)}
              className="hover:shadow-md transition-shadow"
            >
              <Plus className="w-4 h-4 mr-2" />
              Add Qualification
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {groupQualifications.map((qualification) => (
              <QualificationCard 
                key={qualification.id} 
                qualification={qualification}
                onDelete={() => handleDeleteQualification(qualification.id, 'group')}
              />
            ))}
            <AddQualificationForm 
              isVisible={isAddingGroup}
              onAdd={() => handleAddQualification('group')}
              onCancel={() => {
                setIsAddingGroup(false);
                setNewQualification({ name: '', rate: '' });
              }}
            />
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default QualificationsSection;
