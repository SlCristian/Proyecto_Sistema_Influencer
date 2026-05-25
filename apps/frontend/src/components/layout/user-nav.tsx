export function UserNav() {
  return (
    <div className="flex items-center space-x-3 cursor-pointer p-1 hover:bg-gray-50 rounded-lg transition-colors">
      <div className="text-right">
        <p className="text-xs font-bold text-gray-900 leading-none">Admin Panel</p>
        <p className="text-[10px] text-gray-400 font-medium uppercase mt-1">Manager</p>
      </div>
      <div className="h-9 w-9 rounded-full bg-green-900 flex items-center justify-center text-white text-xs font-bold border border-gray-200">
        AS
      </div>
    </div>
  );
}