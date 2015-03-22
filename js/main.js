$("#jsGrid").jsGrid({
    width: "auto",
    height: "auto",
 
    filtering: true,
    editing: true,
    sorting: true,
    paging: true,
 
    data: db.tools,
 
    fields: [
        { name: "Name", type: "text", width: 150 },
        { name: "Website", type: "text", width: 150 },
        { name: "Class", type: "select", items: db.classes, valueField: "Id", textField: "Name" },
        { name: "Used", type: "checkbox", title: "Is/was used", sorting: false },
        { name: "Mark", type: "number", width: 50 },
        { type: "control" }
    ]
});