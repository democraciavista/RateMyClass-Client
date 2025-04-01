function useDiscipline() {
    function mapType(type: 'MANDATORY' | 'ELECTIVE_FREE' | 'ELECTIVE_PROFILE') {
        switch (type) {
            case 'MANDATORY':
                return 'Obrigatória';
            case 'ELECTIVE_FREE':
                return 'Eletiva Livre';
            case 'ELECTIVE_PROFILE':
                return 'Eletiva de Perfil';
            default:
                return type;
        }
    }

    function getColorClass(number: number | undefined) {
        if (number === undefined) {
            return 'fill-gray-400 text-gray-400';
        }
        if (number < 5) {
            return 'fill-red-400 text-red-400';
        }
        if (number < 7) {
            return 'fill-yellow-400 text-yellow-400';
        }
        return 'fill-green-400 text-green-400';
    }

    return { mapType, getColorClass };
}
export { useDiscipline };
