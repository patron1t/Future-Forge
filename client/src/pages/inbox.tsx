import { useState, useMemo } from "react";
import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Search, Building2, Send, CheckCircle2, Clock, MessageSquare } from "lucide-react";

// Mock data for scouts/connections - cleared as per request
const mockConnections: any[] = [];
const mockPendingRequests: any[] = [];

export default function InboxPage() {
  const [activeChat, setActiveChat] = useState<any | null>(null);
  const [messageInput, setMessageInput] = useState("");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredConnections = mockConnections.filter(c => 
    c.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
    c.organization.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <DashboardLayout type="student">
      <div className="mb-6 space-y-2">
        <h1 className="font-heading text-3xl font-bold tracking-tight">Scout Inbox 💬</h1>
        <p className="text-muted-foreground">
          Connect with university admissions, bursary providers, and corporate talent scouts.
        </p>
      </div>

      {/* Pending Requests Banner */}
      {mockPendingRequests.length > 0 && (
        <Card className="mb-6 border-primary/20 bg-primary/5">
          <CardContent className="p-4 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <div className="relative">
                <Avatar className="h-10 w-10 border border-primary/20">
                  <AvatarImage src={mockPendingRequests[0].avatar} />
                  <AvatarFallback>DC</AvatarFallback>
                </Avatar>
                <span className="absolute -top-1 -right-1 flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-primary"></span>
                </span>
              </div>
              <div>
                <p className="text-sm font-medium">
                  <span className="font-bold">{mockPendingRequests[0].name}</span> from {mockPendingRequests[0].organization} wants to connect.
                </p>
                <p className="text-xs text-muted-foreground mt-0.5 line-clamp-1">{mockPendingRequests[0].message}</p>
              </div>
            </div>
            <div className="flex gap-2 w-full sm:w-auto">
              <Button variant="outline" size="sm" className="flex-1 sm:flex-none">Decline</Button>
              <Button size="sm" className="flex-1 sm:flex-none gap-2">
                <CheckCircle2 className="h-4 w-4" />
                Accept
              </Button>
            </div>
          </CardContent>
        </Card>
      )}

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 h-[600px]">
        {/* Connection List Sidebar */}
        <Card className="flex flex-col h-full lg:col-span-1 overflow-hidden">
          <div className="p-4 border-b space-y-4">
            <div className="relative">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input 
                placeholder="Search messages..." 
                className="pl-9 bg-muted/50"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>
          <ScrollArea className="flex-1">
            <div className="p-2 space-y-1">
              {filteredConnections.map((conn) => (
                <button
                  key={conn.id}
                  onClick={() => setActiveChat(conn)}
                  className={`w-full flex items-start gap-3 p-3 rounded-lg text-left transition-colors ${
                    activeChat.id === conn.id 
                      ? "bg-primary/10 hover:bg-primary/15" 
                      : "hover:bg-muted"
                  }`}
                >
                  <div className="relative shrink-0 mt-1">
                    <Avatar className="h-10 w-10 border border-border/50">
                      <AvatarImage src={conn.avatar} />
                      <AvatarFallback>{conn.name.substring(0, 2)}</AvatarFallback>
                    </Avatar>
                    {conn.unread && (
                      <span className="absolute -top-1 -right-1 h-3 w-3 rounded-full bg-primary border-2 border-background" />
                    )}
                  </div>
                  <div className="flex-1 overflow-hidden">
                    <div className="flex justify-between items-center mb-0.5">
                      <p className={`text-sm truncate pr-2 ${conn.unread ? "font-bold text-foreground" : "font-medium text-foreground/80"}`}>
                        {conn.name}
                      </p>
                      <span className="text-[10px] text-muted-foreground whitespace-nowrap">
                        {conn.timestamp}
                      </span>
                    </div>
                    <p className="text-xs text-muted-foreground truncate mb-1">
                      {conn.organization}
                    </p>
                    <p className={`text-xs truncate ${conn.unread ? "font-medium text-foreground" : "text-muted-foreground"}`}>
                      {conn.lastMessage}
                    </p>
                  </div>
                </button>
              ))}
            </div>
          </ScrollArea>
        </Card>

        {/* Active Chat Window */}
        <Card className="flex flex-col h-full lg:col-span-2 overflow-hidden">
          {activeChat ? (
            <>
              {/* Chat Header */}
              <div className="p-4 border-b flex items-center justify-between bg-muted/10">
                <div className="flex items-center gap-4">
                  <Avatar className="h-12 w-12 border">
                    <AvatarImage src={activeChat.avatar} />
                    <AvatarFallback>{activeChat.name.substring(0, 2)}</AvatarFallback>
                  </Avatar>
                  <div>
                    <h3 className="font-bold">{activeChat.name}</h3>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Building2 className="h-3 w-3" />
                      {activeChat.role} at {activeChat.organization}
                    </div>
                  </div>
                </div>
                <Button variant="outline" size="sm">View Profile</Button>
              </div>

              {/* Chat Messages Area */}
              <ScrollArea className="flex-1 p-4 bg-muted/5">
                <div className="space-y-6">
                  <div className="flex justify-center">
                    <Badge variant="outline" className="text-xs font-normal text-muted-foreground bg-background">
                      Connection established {activeChat.timestamp.includes("ago") ? "Today" : activeChat.timestamp}
                    </Badge>
                  </div>

                  <div className="flex gap-4">
                    <Avatar className="h-8 w-8 shrink-0 border mt-auto mb-1">
                      <AvatarImage src={activeChat.avatar} />
                    </Avatar>
                    <div className="bg-background border rounded-2xl rounded-bl-none p-4 max-w-[80%] shadow-sm">
                      <p className="text-sm">{activeChat.lastMessage}</p>
                      <p className="text-[10px] text-muted-foreground mt-2 text-right">
                        {activeChat.timestamp}
                      </p>
                    </div>
                  </div>
                </div>
              </ScrollArea>

              {/* Message Input */}
              <div className="p-4 border-t bg-background">
                <form 
                  className="flex gap-2" 
                  onSubmit={(e) => {
                    e.preventDefault();
                    if (messageInput.trim()) {
                      setMessageInput("");
                    }
                  }}
                >
                  <Input 
                    placeholder={`Reply to ${activeChat.name.split(' ')[0]}...`}
                    value={messageInput}
                    onChange={(e) => setMessageInput(e.target.value)}
                    className="flex-1 bg-muted/50"
                  />
                  <Button type="submit" size="icon" disabled={!messageInput.trim()}>
                    <Send className="h-4 w-4" />
                  </Button>
                </form>
                <p className="text-[10px] text-muted-foreground text-center mt-2 flex items-center justify-center gap-1">
                  <Clock className="h-3 w-3" />
                  Scouts usually reply within 24 hours
                </p>
              </div>
            </>
          ) : (
            <div className="flex-1 flex flex-col items-center justify-center text-muted-foreground p-8 text-center space-y-4">
              <div className="h-16 w-16 rounded-full bg-muted flex items-center justify-center">
                <MessageSquare className="h-8 w-8 text-muted-foreground/50" />
              </div>
              <div>
                <h3 className="font-semibold text-lg text-foreground mb-1">No messages yet</h3>
                <p>When scouts view your portfolio and want to connect, their messages will appear here.</p>
              </div>
            </div>
          )}
        </Card>
      </div>
    </DashboardLayout>
  );
}