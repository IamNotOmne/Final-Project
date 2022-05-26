//MenuToggle
let toggle = document.querySelector('.toggle');
let navigation = document.querySelector('.navigation');
let main = document.querySelector('.main');

toggle.onclick = function() {
    navigation.classList.toggle('active');
    main.classList.toggle('active')
}

// add hovered class in selected list item
let list = document.querySelectorAll('.navigation li');

function activeLink() {
    list.forEach((item) => item.classList.remove('hovered'));
    this.classList.add('hovered');
}
list.forEach((item) => item.addEventListener('mouseover', activeLink));

function linkclick(cityName, elmnt, color) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablink");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].style.backgroundColor = "";
    }
    document.getElementById(cityName).style.display = "block";
    elmnt.style.backgroundColor = color;

}
document.getElementById("defaultOpen").click();

function menuToggle() {
    const toggleMenu = document.querySelector('.userMenu');
    toggleMenu.classList.toggle('active')
}

/*================== For the Consequence Card ============================ */
var emptyRow = "<tr><td  class='newTable'> No Records Available</td></tr>";
var emptyNewRow = "<tr class='trNewRow'>";
emptyNewRow = emptyNewRow + "    <td class='task-list'>";
emptyNewRow = emptyNewRow + "        <input type='text' class='taskList' placeholder='Enter Name'/>";
emptyNewRow = emptyNewRow + "    </td>";
emptyNewRow = emptyNewRow + "    <td class='task-team'>";
emptyNewRow = emptyNewRow + "        <input type='text' class='taskTeam' placeholder='Enter Team'/>";
emptyNewRow = emptyNewRow + "    </td>";
emptyNewRow = emptyNewRow + "    <td class='task-status'>";
emptyNewRow = emptyNewRow + "        <button class='save-btn'> Save</button>";
emptyNewRow = emptyNewRow + "        <button class='cancel-btn'> Cancel</button>";
emptyNewRow = emptyNewRow + "    </td>";
emptyNewRow = emptyNewRow + "</tr>";

var rowButtons = "<button class='edit-btn'>Edit</button>  <button class='remove-btn' >Remove</button> ";
var rowUpdateButtons = "<button class='save-btn' > Update </button>  <button class='cancel-btn' > Cancel </button> ";

$(document).ready(function() {
    debugger;
    $("#taskTable tbody").append(emptyRow); // adding empty row on page load 

    $("#btnAdd").click(function() {
        debugger;
        if ($("#taskTable tbody").children().children().length == 1) {
            $("#taskTable tbody").html("");
        }
        debugger;
        $("#taskTable tbody").append(emptyNewRow); // appending dynamic string to table tbody
    });
    $('#taskTable').on('click', '.save-btn', function() {
        const list = $(this).parent().parent().find(".taskList").val();
        $(this).parent().parent().find(".task-list").html("" + list + "");
        const type = $(this).parent().parent().find(".taskTeam").val();
        $(this).parent().parent().find(".task-team").html("" + type);
        $(this).parent().parent().find(".task-status").html(rowButtons);
    });
    $('#taskTable').on('click', '.cancel-btn', function() { // registering function for delete button  
        $(this).parent().parent().remove();
        if ($("#taskTable tbody").children().children().length == 0) {
            $("#taskTable tbody").append(emptyRow);
        }
    });
    $('#taskTable').on('click', '.remove-btn', function() {
        $(this).parent().parent().remove();
    });
    $('#taskTable').on('click', '.edit-btn', function() {
        const list = $(this).parent().parent().find(".task-list").html();
        $(this).parent().parent().find(".task-list").html("<input type='text' value='" + list + "' class='taskList' placeholder='Enter Task'/>");

        const type = $(this).parent().parent().find(".task-type").html();
        $(this).parent().parent().find(".task-team").html("<input type='text' value='" + type + "' class='taskTeam' placeholder='Enter Team'/>");

        $(this).parent().parent().find(".task-status").html(rowUpdateButtons);
    });
});