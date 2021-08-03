

$(document).ready(function () {
    $('.accordion-item').click(function (e) {
        e.preventDefault();
        var iconArrow = document.getElementsByClassName('icon-arrow');
        var $this = $(this);

        if ($this.next().hasClass('show')) {
            $this.next().removeClass('show');
            $this.next().slideUp(350);

        } else {
            $this.parent().parent().find('.accordion-body').removeClass('show');
            $this.parent().parent().find('.accordion-body').slideUp(350);
            $this.next().toggleClass('show');
            $this.next().slideToggle(350);
        }
        var iconArrow = document.getElementsByClassName('icon-arrow');
        var accBody = document.getElementsByClassName('accordion-body');
        for (i = 0; i < iconArrow.length; i++) {
            if (accBody[i].className === 'accordion-body show') {
                iconArrow[i].className = 'icon-arrow fas fa-caret-square-down';
            } else {
                iconArrow[i].className = 'icon-arrow fas fa-caret-square-right';
            }
        }
    });
    var tabContent = document.getElementsByClassName('tabContent');
    var i;
    for (let i = 1; i < tabContent.length; i++) {
        tabContent[i].style.display = 'none';
    }

    // var clientHeight = document.getElementById('table-FXS_VoIP_Extensions').clientHeight;
    // alert(clientHeight);



    $(function () {
        let i, j;
        for (i = 0; i < 24; i++) $('#table-FXS_VoIP_Extensions').append('  <tr id="FXS_table_row'+i+'">\n' +
            '                            <td id="FXS_table_col'+i+'1"></td>\n' +
            '                            <td id="FXS_table_col'+i+'2"></td>\n' +
            '                            <td id="FXS_table_col'+i+'3"></td>\n' +
            '                            <td></td>\n' +
            '                            <td id="FXS_table_col'+i+'4">\n' +
            '                                <button class="acceptBtn" onclick=""><i class="fa fa-pencil" aria-hidden="true"></i></button>\n' +
            '                                <button class="cancelBtn" onclick=""><i class="fa fa-times" aria-hidden="true"></i></button>\n' +
            '                            </td>\n' +
            '                        </tr>');
    })



    $(function () {
        var table = document.getElementById('table-FXS_VoIP_Extensions');
        for (var i = 0, n = table.rows.length; i < n; i++) {
            for (var j = 0, m = table.rows[i].cells.length; j < m; j++) {
                // console.log(table.rows[r].cells[c].innerHTML);
                table.rows[i + 1].cells[0].innerHTML=(i+1);   // gán giá trị vào ô
            }
        }
    })




})
window.onload=function (){
    $('#FXS_table_col32').html('acv');

    var cc=$('#table-FXS_VoIP_Extensions').height();
    alert (cc);


     // var rr=document.getElementById('table-FXS_VoIP_Extensions').getBoundingClientRect().height;
     // console.log(rr);

}



// gia tri o cua bang duoc lay o day



function PBX_child1(evt, tabName) {
    var i;
    let tabContent = document.getElementsByClassName('tab_content_FXS_VoIP');
    let tabLinks = document.getElementsByClassName('tab_links_FXS_VoIP');

    document.getElementById("title-tabTool-PBX").innerHTML = tabName;
    for (i = 0; i < tabContent.length; i++) {
        tabContent[i].style.display = 'none';
    }
    for (i = 0; i < tabLinks; i++) {
        tabLinks[i].className = tabLinks[i].className.replace(" active", "");
    }
    document.getElementById(tabName).style.display = 'block';
    evt.currentTarget.className += " active";
}


// function GetCellValues() {
//     var table = document.getElementById('table-FXS_VoIP_Extensions');
//     for (var r = 0, n = table.rows.length; r < n; r++) {
//         for (var c = 0, m = table.rows[r].cells.length; c < m; c++) {
//             // console.log(table.rows[r].cells[c].innerHTML);
//         }
//     }
//     table.rows[1].cells[0].innerHTML="1234";   // gán giá trị vào ô
// }