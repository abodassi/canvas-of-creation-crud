
import React, { useState, useRef } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from '@/components/ui/label';
import { ImageIcon, Upload, Globe } from 'lucide-react';

interface ImageUploadProps {
  currentImageUrl: string;
  onImageChange: (newImageUrl: string) => void;
  label?: string;
}

const ImageUpload: React.FC<ImageUploadProps> = ({ 
  currentImageUrl, 
  onImageChange,
  label = "Image" 
}) => {
  const [uploadType, setUploadType] = useState<'url' | 'file'>('url');
  const [imageUrl, setImageUrl] = useState(currentImageUrl || '');
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleUrlChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setImageUrl(e.target.value);
    onImageChange(e.target.value);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        const result = event.target?.result as string;
        setImageUrl(result);
        onImageChange(result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="space-y-3">
      <Label>{label}</Label>
      
      <div className="flex flex-col gap-4">
        <div className="flex gap-2">
          <Button 
            type="button"
            variant={uploadType === 'url' ? "default" : "outline"}
            onClick={() => setUploadType('url')}
            className="flex-1"
          >
            <Globe className="mr-2 h-4 w-4" />
            URL
          </Button>
          <Button 
            type="button"
            variant={uploadType === 'file' ? "default" : "outline"}
            onClick={() => setUploadType('file')}
            className="flex-1"
          >
            <Upload className="mr-2 h-4 w-4" />
            Upload
          </Button>
        </div>

        {uploadType === 'url' ? (
          <Input
            value={imageUrl}
            onChange={handleUrlChange}
            placeholder="https://example.com/image.jpg"
          />
        ) : (
          <div>
            <input
              type="file"
              accept="image/*"
              className="hidden"
              ref={fileInputRef}
              onChange={handleFileChange}
            />
            <Button 
              type="button" 
              variant="outline" 
              onClick={() => fileInputRef.current?.click()}
              className="w-full"
            >
              <Upload className="mr-2 h-4 w-4" />
              Choose File
            </Button>
          </div>
        )}

        {imageUrl && (
          <div className="mt-2 border rounded-md overflow-hidden bg-gray-50 dark:bg-gray-800">
            <div className="p-2 bg-gray-100 dark:bg-gray-700 flex items-center">
              <ImageIcon className="h-4 w-4 mr-2 text-gray-500 dark:text-gray-400" />
              <span className="text-sm text-gray-500 dark:text-gray-400">Preview</span>
            </div>
            <div className="p-4 flex justify-center">
              <img 
                src={imageUrl} 
                alt="Preview" 
                className="max-h-40 object-contain" 
                onError={(e) => {
                  (e.target as HTMLImageElement).src = '/placeholder.svg';
                }} 
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ImageUpload;
