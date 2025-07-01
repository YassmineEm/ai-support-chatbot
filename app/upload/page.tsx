"use client"

import { useState, useCallback } from "react"
import { useDropzone } from "react-dropzone"
import { Upload, FileText, X, CheckCircle, AlertCircle, Cloud, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"

interface UploadedFile {
  id: string
  name: string
  size: number
  type: string
  status: "uploading" | "success" | "error"
  progress: number
}

export default function UploadPage() {
  const [files, setFiles] = useState<UploadedFile[]>([])

  const onDrop = useCallback((acceptedFiles: File[]) => {
    const newFiles = acceptedFiles.map((file) => ({
      id: Math.random().toString(36).substr(2, 9),
      name: file.name,
      size: file.size,
      type: file.type,
      status: "uploading" as const,
      progress: 0,
    }))

    setFiles((prev) => [...prev, ...newFiles])

    // Simulate upload progress
    newFiles.forEach((file) => {
      const interval = setInterval(() => {
        setFiles((prev) =>
          prev.map((f) => {
            if (f.id === file.id) {
              const newProgress = f.progress + Math.random() * 30
              if (newProgress >= 100) {
                clearInterval(interval)
                return { ...f, progress: 100, status: "success" }
              }
              return { ...f, progress: newProgress }
            }
            return f
          }),
        )
      }, 200)
    })
  }, [])

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      "application/pdf": [".pdf"],
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document": [".docx"],
      "text/plain": [".txt"],
      "text/html": [".html"],
    },
    multiple: true,
  })

  const removeFile = (id: string) => {
    setFiles((prev) => prev.filter((f) => f.id !== id))
  }

  const formatFileSize = (bytes: number) => {
    if (bytes === 0) return "0 Bytes"
    const k = 1024
    const sizes = ["Bytes", "KB", "MB", "GB"]
    const i = Math.floor(Math.log(bytes) / Math.log(k))
    return Number.parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + " " + sizes[i]
  }

  const acceptedFormats = [
    { ext: "PDF", desc: "PDF Documents", icon: "📄", color: "from-red-500 to-red-600" },
    { ext: "DOCX", desc: "Word Documents", icon: "📝", color: "from-blue-500 to-blue-600" },
    { ext: "TXT", desc: "Text Files", icon: "📃", color: "from-gray-500 to-gray-600" },
    { ext: "HTML", desc: "Web Pages", icon: "🌐", color: "from-green-500 to-green-600" },
  ]

  return (
    <div className="min-h-screen py-8 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-ai-bg via-ai-surface to-ai-blue-light/20">
      <div className="max-w-5xl mx-auto">
        <div className="mb-12 text-center animate-slide-up">
          <Badge className="mb-4 px-4 py-2 bg-gradient-to-r from-ai-blue to-ai-green text-white border-0 shadow-elegant">
            <Cloud className="w-4 h-4 mr-2" />
            Document Upload
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-ai-text to-ai-blue bg-clip-text text-transparent mb-4">
            Upload Your Documents
          </h1>
          <p className="text-xl text-ai-text-light max-w-2xl mx-auto">
            Upload your support documents to power your AI chatbot's knowledge base with intelligent processing.
          </p>
        </div>

        {/* Upload Zone */}
        <Card
          className="mb-8 border-0 shadow-elegant-lg bg-ai-surface/80 backdrop-blur-sm animate-slide-up"
          style={{ animationDelay: "0.1s" }}
        >
          <CardHeader>
            <CardTitle className="flex items-center space-x-3 text-2xl">
              <div className="w-10 h-10 bg-gradient-to-br from-ai-blue to-ai-green rounded-xl flex items-center justify-center shadow-elegant">
                <Upload className="w-5 h-5 text-white" />
              </div>
              <span>Upload Zone</span>
            </CardTitle>
            <CardDescription className="text-lg">
              Drag and drop your files or click to browse and select
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div
              {...getRootProps()}
              className={`relative border-2 border-dashed rounded-2xl p-12 text-center cursor-pointer transition-all duration-300 ${
                isDragActive
                  ? "border-ai-blue bg-ai-blue-light/50 shadow-glow"
                  : "border-ai-border hover:border-ai-blue hover:bg-ai-blue-light/20 hover:shadow-elegant"
              }`}
            >
              <input {...getInputProps()} />
              <div className="relative">
                <div
                  className={`w-20 h-20 mx-auto mb-6 rounded-2xl flex items-center justify-center transition-all duration-300 ${
                    isDragActive ? "bg-ai-blue shadow-glow" : "bg-ai-blue-light"
                  }`}
                >
                  <Upload className={`w-10 h-10 transition-colors ${isDragActive ? "text-white" : "text-ai-blue"}`} />
                </div>
                {isDragActive ? (
                  <div className="animate-scale-in">
                    <p className="text-xl font-semibold text-ai-blue mb-2">Drop your files here!</p>
                    <p className="text-ai-text-light">Release to upload your documents</p>
                  </div>
                ) : (
                  <div>
                    <p className="text-xl font-semibold text-ai-text mb-2">
                      Drag & drop your files here, or{" "}
                      <span className="text-ai-blue hover:underline">click to browse</span>
                    </p>
                    <p className="text-ai-text-light mb-4">Supports PDF, DOCX, TXT, and HTML files up to 10MB each</p>
                    <Badge variant="outline" className="bg-ai-green-light text-ai-green border-ai-green/20">
                      <Sparkles className="w-3 h-3 mr-1" />
                      AI-Powered Processing
                    </Badge>
                  </div>
                )}
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Accepted Formats */}
        <Card
          className="mb-8 border-0 shadow-elegant bg-ai-surface/80 backdrop-blur-sm animate-slide-up"
          style={{ animationDelay: "0.2s" }}
        >
          <CardHeader>
            <CardTitle className="text-xl">Supported File Formats</CardTitle>
            <CardDescription>We support these document types for optimal AI processing</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {acceptedFormats.map((format, index) => (
                <div
                  key={index}
                  className="group p-4 bg-gradient-to-br from-ai-bg to-ai-blue-light/30 rounded-xl border border-ai-border/50 hover:shadow-elegant transition-all duration-300 transform hover:scale-105"
                >
                  <div className="flex items-center space-x-3">
                    <div
                      className={`w-10 h-10 bg-gradient-to-br ${format.color} rounded-lg flex items-center justify-center shadow-elegant group-hover:shadow-glow transition-all duration-300`}
                    >
                      <span className="text-white font-bold text-sm">{format.ext}</span>
                    </div>
                    <div>
                      <div className="font-semibold text-ai-text">{format.ext}</div>
                      <div className="text-sm text-ai-text-light">{format.desc}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Uploaded Files */}
        {files.length > 0 && (
          <Card
            className="border-0 shadow-elegant-lg bg-ai-surface/80 backdrop-blur-sm animate-slide-up"
            style={{ animationDelay: "0.3s" }}
          >
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                <span className="text-xl">Uploaded Files ({files.length})</span>
                <div className="flex items-center space-x-2">
                  <Badge className="bg-ai-green-light text-ai-green border-0">
                    {files.filter((f) => f.status === "success").length} Completed
                  </Badge>
                  {files.some((f) => f.status === "uploading") && (
                    <Badge className="bg-ai-yellow-light text-orange-600 border-0">
                      {files.filter((f) => f.status === "uploading").length} Processing
                    </Badge>
                  )}
                </div>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {files.map((file) => (
                  <div
                    key={file.id}
                    className="group flex items-center space-x-4 p-4 bg-gradient-to-r from-ai-bg to-ai-blue-light/20 rounded-xl border border-ai-border/50 hover:shadow-elegant transition-all duration-300"
                  >
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-gradient-to-br from-ai-blue to-ai-green rounded-xl flex items-center justify-center shadow-elegant">
                        <FileText className="w-6 h-6 text-white" />
                      </div>
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between mb-2">
                        <p className="font-semibold text-ai-text truncate pr-4">{file.name}</p>
                        <div className="flex items-center space-x-3">
                          {file.status === "success" && (
                            <div className="flex items-center space-x-1">
                              <CheckCircle className="w-5 h-5 text-ai-green" />
                              <span className="text-sm font-medium text-ai-green">Complete</span>
                            </div>
                          )}
                          {file.status === "error" && (
                            <div className="flex items-center space-x-1">
                              <AlertCircle className="w-5 h-5 text-red-500" />
                              <span className="text-sm font-medium text-red-500">Failed</span>
                            </div>
                          )}
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => removeFile(file.id)}
                            className="opacity-0 group-hover:opacity-100 transition-opacity text-ai-text-light hover:text-red-500 hover:bg-red-50"
                          >
                            <X className="w-4 h-4" />
                          </Button>
                        </div>
                      </div>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm text-ai-text-light">{formatFileSize(file.size)}</span>
                        {file.status === "uploading" && (
                          <span className="text-sm font-medium text-ai-blue">{Math.round(file.progress)}%</span>
                        )}
                      </div>
                      {file.status === "uploading" && (
                        <Progress value={file.progress} className="h-2 bg-ai-blue-light">
                          <div className="h-full bg-gradient-to-r from-ai-blue to-ai-green rounded-full transition-all duration-300"></div>
                        </Progress>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  )
}
