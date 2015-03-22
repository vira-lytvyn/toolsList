(function() {

    var db = {

        loadData: function(filter) {
            return $.grep(this.tools, function(tool) {
                return (!filter.Name || tool.Name.indexOf(filter.Name) > -1)
                    && (!filter.Mark || tool.Mark === filter.Mark)
                    && (!filter.Website || tool.Website.indexOf(filter.Website) > -1)
                    && (!filter.Class || tool.Class === filter.Class)
                    && (filter.Used === undefined || tool.Used === filter.Used);
            });
        },

        insertItem: function(insertingTool) {
            this.tools.push(insertingTool);
        },

        updateItem: function(updatingTool) { },

        deleteItem: function(deletingTool) {
            var toolIndex = $.inArray(deletingTool, this.tools);
            this.tools.splice(toolIndex, 1);
        }

    };

    window.db = db;


    db.classes = [
        { Name: "", Id: 0 },
        { Name: "Libraries", Id: 1 },
        { Name: "Editors", Id: 2 },
        { Name: "Frameworks", Id: 3 },
        { Name: "Technologies", Id: 4 },
        { Name: "Approach", Id: 5 },
        { Name: "Meinstream", Id: 6 },
        { Name: "Person", Id: 7 }
    ];

    db.tools = [
    ];

    db.users = [
     ];

}());