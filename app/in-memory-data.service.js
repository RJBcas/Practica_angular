"use strict";
var InMemoryDataService = (function () {
    function InMemoryDataService() {
    }
    InMemoryDataService.prototype.createDb = function () {
        var Campeones = [
            { id: 11, name: 'ashe' },
            { id: 12, name: 'Corkis' },
            { id: 13, name: 'caytlin' },
            { id: 14, name: 'Draven' },
            { id: 15, name: 'Kog mag' },
            { id: 16, name: 'jinx' },
            { id: 17, name: 'sirvir' },
            { id: 18, name: 'ezreal' },
            { id: 19, name: 'jhin' },
            { id: 20, name: 'queen' },
        ];
        return { Campeones: Campeones };
    };
    return InMemoryDataService;
}());
exports.InMemoryDataService = InMemoryDataService;
//# sourceMappingURL=in-memory-data.service.js.map