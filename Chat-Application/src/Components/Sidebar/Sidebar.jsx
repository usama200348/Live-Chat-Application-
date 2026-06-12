function Sidebar() {
  return (
    <div className="w-80 bg-base-100 border-r">
      <div className="p-4">
        <h2 className="text-2xl font-bold">
          Chats
        </h2>
      </div>

      <div className="p-2">
        <div className="flex items-center gap-3 p-3 rounded-lg hover:bg-base-200 cursor-pointer">
          <div className="avatar online">
            <div className="w-12 rounded-full">
              <img src="https://i.pravatar.cc/150?img=1" />
            </div>
          </div>

          <div>
            <h3 className="font-semibold">
              Ali
            </h3>

            <p className="text-sm">
              Online
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;