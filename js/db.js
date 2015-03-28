(function() {

    var db = {

        loadData: function(filter) {
            return $.grep(this.tools, function(tool) {
                return (!filter.Name || tool.Name.indexOf(filter.Name) > -1)
                    && (!filter.Mark || tool.Mark === filter.Mark)
                    && (!filter.Website || tool.Website.indexOf(filter.Website) > -1)
                    && (!filter.Class || tool.Class === filter.Class)
                    && (filter.Used === undefined || tool.Used === filter.Used)
                    && (!filter.ShortDescription || tool.ShortDescription.indexOf(filter.ShortDescription) > -1);
            });
        },

        insertItem: function(insertingTool) {
            this.tools.push(insertingTool);
        },

        updateItem: function(updatingTool) { console.log(updatingTool);},

        deleteItem: function(deletingTool) {
            var toolIndex = $.inArray(deletingTool, this.tools);
            this.tools.splice(toolIndex, 1);
        }

    };

    window.db = db;

    db.classes = [
        { Name: "", Id: 0 },
        { Name: "Library", Id: 1 },
        { Name: "Editor", Id: 2 },
        { Name: "Framework", Id: 3 },
        { Name: "Technology", Id: 4 },
        { Name: "Approach", Id: 5 },
        { Name: "Meinstream", Id: 6 },
        { Name: "Person", Id: 7 },
        { Name: "Plugin", Id: 8 }        
    ];

    db.tools = [
        {
            "Name": "is.js",
            "Website": "",
            "Class": 1,
            "Used": false,
            "Mark": 0
        },
        {
            "Name": "jsGrid.js",
            "Website": "",
            "Class": 8,
            "Used": true,
            "Mark": 7
        },
        {
            "Name": "Brackets",
            "Website": "",
            "Class": 2,
            "Used": false,
            "Mark": 0
        },
        {
            "Name": "Atom",
            "Website": "",
            "Class": 2,
            "Used": false,
            "Mark": 0
        },
        {
            "Name": "raw.js",
            "Website": "",
            "Class": 3,
            "Used": false,
            "Mark": 0
        },
        {
            "Name": "datetimepicker.js",
            "Website": "",
            "Class": 8,
            "Used": true,
            "Mark": 9
        }
    ];

    db.users = [
        {
            "ID": "x",
            "Account": "A758A693-0302-03D1-AE53-EEFE22855556",
            "Name": "Vira Lytvyn",
            "RegisterDate": "2015-03-22T23:41:52-07:00"
        }
    ];

}());