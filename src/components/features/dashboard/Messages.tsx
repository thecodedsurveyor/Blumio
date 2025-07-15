import { useState } from "react";
import {
  Search,
  Phone,
  Video,
  MoreHorizontal,
  Paperclip,
  Smile,
  Send,
  Plus,
} from "lucide-react";
import DashboardViewHeader from "./DashboardViewHeader";

type Contact = {
  id: number;
  name: string;
  message: string;
  time: string;
  avatar: string;
  unread: number;
  active: boolean;
  typing?: boolean;
};

// Note: If you want to render messages, implement a Message interface and message rendering logic here.

const contacts: Contact[] = [
  {
    id: 1,
    name: "Robert Fox",
    message: "Hi, Any update from client?",
    time: "10:27",
    avatar:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    unread: 3,
    active: false,
  },
  {
    id: 2,
    name: "Leslie Alexander",
    message: "Will do, I appreciate that you...",
    time: "10:01",
    avatar:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    unread: 1,
    active: false,
  },
  {
    id: 3,
    name: "Jacob Jones",
    message: "Need to discuss on ZXCorp...",
    time: "9:41",
    avatar:
      "https://images.unsplash.com/photo-1527980965255-d3b416303d12?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    unread: 0,
    active: true,
  },
  {
    id: 4,
    name: "Brooklyn Simmons",
    message: "Hello Brooklyn, How are you...",
    time: "1:04",
    avatar:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    unread: 0,
    active: false,
  },
  {
    id: 5,
    name: "Eleanor Pena",
    message: "Just finished the weekly report...",
    time: "11:04",
    avatar:
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    unread: 0,
    active: false,
  },
  {
    id: 6,
    name: "Kateman Kristina",
    message: "Typing...",
    time: "2:18",
    avatar:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    unread: 0,
    active: false,
    typing: true,
  },
  {
    id: 7,
    name: "Mikasa Fruzatina",
    message: "Hi, Any update from client?",
    time: "2:18",
    avatar:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    unread: 0,
    active: false,
  },
  {
    id: 8,
    name: "Bella Daniella",
    message: "Hi, Any update from client?",
    time: "12:4",
    avatar:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    unread: 0,
    active: false,
  },
];

function Messages() {
  const [selectedContact, setSelectedContact] = useState<Contact | null>(
    contacts.find((contact) => contact.active) || null,
  );
  const [messageText, setMessageText] = useState<string>("");
  const [searchQuery, setSearchQuery] = useState<string>("");

  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (messageText.trim()) {
      // Here you would typically send the message to your backend
      setMessageText("");
    }
  };

  return (
    <div className="flex h-full flex-col">
      <DashboardViewHeader title="Messages" />
      <div className="flex flex-1 overflow-hidden">
        {/* Contacts Sidebar */}
        <div className="w-80 flex-none border-r border-gray-200 bg-white">
          <div className="p-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search contacts..."
                className="w-full rounded-lg border border-gray-200 bg-gray-50 py-2 pl-10 pr-4 text-sm text-gray-900 placeholder-gray-500 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>
          <div className="overflow-y-auto">
            {filteredContacts.map((contact) => (
              <button
                key={contact.id}
                onClick={() => setSelectedContact(contact)}
                className={`w-full px-4 py-3 transition-colors duration-200 hover:bg-gray-50 ${
                  selectedContact?.id === contact.id ? "bg-gray-50" : ""
                }`}
              >
                <div className="flex items-center space-x-3">
                  <div className="relative flex-shrink-0">
                    <img
                      src={contact.avatar}
                      alt={contact.name}
                      className="h-10 w-10 rounded-full object-cover"
                    />
                    {contact.active && (
                      <span className="absolute bottom-0 right-0 h-3 w-3 rounded-full border-2 border-white bg-green-400" />
                    )}
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center justify-between">
                      <p className="truncate text-sm font-medium text-gray-900">
                        {contact.name}
                      </p>
                      <p className="text-xs text-gray-500">{contact.time}</p>
                    </div>
                    <p
                      className={`truncate text-sm ${
                        contact.typing
                          ? "text-blue-600"
                          : contact.unread > 0
                          ? "font-medium text-gray-900"
                          : "text-gray-500"
                      }`}
                    >
                      {contact.message}
                    </p>
                  </div>
                  {contact.unread > 0 && (
                    <div className="ml-2 rounded-full bg-blue-600 px-2 py-0.5">
                      <span className="text-xs font-medium text-white">
                        {contact.unread}
                      </span>
                    </div>
                  )}
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Chat Area */}
        <div className="flex flex-1 flex-col bg-gray-50">
          {selectedContact ? (
            <>
              {/* Chat Header */}
              <div className="flex items-center justify-between border-b border-gray-200 bg-white px-6 py-4">
                <div className="flex items-center space-x-3">
                  <div className="relative">
                    <img
                      src={selectedContact.avatar}
                      alt={selectedContact.name}
                      className="h-10 w-10 rounded-full object-cover"
                    />
                    {selectedContact.active && (
                      <span className="absolute bottom-0 right-0 h-3 w-3 rounded-full border-2 border-white bg-green-400" />
                    )}
                  </div>
                  <div>
                    <h2 className="text-sm font-medium text-gray-900">
                      {selectedContact.name}
                    </h2>
                    {selectedContact.active && (
                      <p className="text-xs text-green-600">Online</p>
                    )}
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <button
                    type="button"
                    className="rounded-lg p-2 text-gray-500 hover:bg-gray-100 hover:text-gray-600"
                  >
                    <Phone className="h-5 w-5" />
                  </button>
                  <button
                    type="button"
                    className="rounded-lg p-2 text-gray-500 hover:bg-gray-100 hover:text-gray-600"
                  >
                    <Video className="h-5 w-5" />
                  </button>
                  <button
                    type="button"
                    className="rounded-lg p-2 text-gray-500 hover:bg-gray-100 hover:text-gray-600"
                  >
                    <MoreHorizontal className="h-5 w-5" />
                  </button>
                </div>
              </div>

              {/* Messages */}
              <div className="flex-1 overflow-y-auto p-6">
                {/* Messages would be rendered here */}
              </div>

              {/* Message Input */}
              <div className="border-t border-gray-200 bg-white p-4">
                <form onSubmit={handleSendMessage} className="flex space-x-4">
                  <button
                    type="button"
                    className="flex-none rounded-lg p-2 text-gray-500 hover:bg-gray-100 hover:text-gray-600"
                  >
                    <Plus className="h-5 w-5" />
                  </button>
                  <button
                    type="button"
                    className="flex-none rounded-lg p-2 text-gray-500 hover:bg-gray-100 hover:text-gray-600"
                  >
                    <Paperclip className="h-5 w-5" />
                  </button>
                  <input
                    type="text"
                    placeholder="Type a message"
                    className="flex-1 rounded-lg border border-gray-200 px-4 py-2 text-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                    value={messageText}
                    onChange={(e) => setMessageText(e.target.value)}
                  />
                  <button
                    type="button"
                    className="flex-none rounded-lg p-2 text-gray-500 hover:bg-gray-100 hover:text-gray-600"
                  >
                    <Smile className="h-5 w-5" />
                  </button>
                  <button
                    type="submit"
                    className="flex-none rounded-lg bg-blue-600 p-2 text-white hover:bg-blue-700"
                    disabled={!messageText.trim()}
                  >
                    <Send className="h-5 w-5" />
                  </button>
                </form>
              </div>
            </>
          ) : (
            <div className="flex flex-1 items-center justify-center">
              <p className="text-gray-500">
                Select a contact to start chatting
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Messages;
