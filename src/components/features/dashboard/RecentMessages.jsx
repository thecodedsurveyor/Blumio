const RecentMessages = ({ messages }) => (
  <div className="col-span-12 rounded-xl bg-white p-6 shadow-sm lg:col-span-4">
    <div className="mb-6 flex items-center justify-between">
      <h2 className="text-lg font-semibold">Recent Messages</h2>
      <button className="text-sm font-medium text-blue-600">View All</button>
    </div>
    <div className="space-y-6">
      {messages.map((message) => (
        <div key={message.name} className="flex items-start gap-4">
          <img
            src={message.avatar}
            alt={message.name}
            className="h-10 w-10 rounded-full"
          />
          <div className="flex-1">
            <div className="flex items-center justify-between">
              <h3 className="font-medium">{message.name}</h3>
              <div className="flex items-center gap-2">
                {message.unread && (
                  <span className="h-2 w-2 rounded-full bg-blue-500"></span>
                )}
                <span className="text-sm text-gray-500">{message.time}</span>
              </div>
            </div>
            <p className="text-sm text-gray-600">{message.message}</p>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default RecentMessages;
