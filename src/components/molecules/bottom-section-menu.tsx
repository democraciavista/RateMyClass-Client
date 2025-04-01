import { LogOut } from 'lucide-react';

function BottomSection() {
    return (
        <div className="py-4  border-t border-gray-700">
            <button className="flex items-center  text-red-400 hover:text-red-500 w-full pl-4 py-2 hover:bg-gray-200">
                <LogOut size={20} />
                <span className="ml-4">Sair</span>
            </button>
        </div>
    );
}
export { BottomSection };
