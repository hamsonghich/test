
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

    $(function () {
        let i;
        let j;
        for (i = 0; i < 60; i++) {
            $('#minute').append('<option value="' + i + '">' + i + '</option>');
        }
        for (j = 0; j < 24; j++) {
            $('#hour').append('<option value="' + j + '">' + j + '</option>');
        }
    })

    // $('.tablinks').click(function (e){
    //     e.preventDefault();
    //     $('.tablinks').classList.add('active');
    // })

})

function getSelectDate(param) {    // param là id của select option DATE
    var getSelectDate = document.getElementById(param);
    console.log(+getSelectDate + " =" + getSelectDate.value);
    return getSelectDate.value;
}

function submitDate() {
    var getSelectDate1 = document.getElementById('hour');
    if (getSelectDate('AM_PM') === 'AM') {
        // console.log('AM');
        if (getSelectDate('hour') > 12) {
            // console.log('hour am: '+(getSelectDate('hour') - 12));
            getSelectDate1.value = (getSelectDate('hour') - 12);
        } else {
            // console.log('hour am: '+getSelectDate('hour'));
            getSelectDate1.value = (getSelectDate('hour'));
        }
    } else {
        console.log('PM');
    }
}

function HandleStrTime(str, char) {
    var date1 = str.split(char);
    return date1;
}

function convertDay(strNum) {
    var dayNumber = ["0","1","2", "3", "4", "5", "6"];
    var dayChar = ['Sun','Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    var cc;
    let i;
    for (i = 0; i < 12; i++) {
        if (strNum === parseInt(dayNumber[i])) {
            dayNumber[i] = dayChar[i];
            cc = dayChar[i];
        }
    }
    return cc;
}


function convertMonth(strMonth) {
    var monthNumber = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"];
    var monthsChar = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    var cc;
    let i;
    for (i = 0; i < 12; i++) {
        if (strMonth === monthsChar[i]) {
            monthsChar[i] = monthNumber[i];
            cc = monthNumber[i];
        }
    }
    return cc;
}
function checkMonth(month, year) {
    if (year % 4 === 0) {
        if (month % 2 === 0 && month !== 2) {
            return 30;
        } else if (month === 2) {
            return 29;
        } else {
            return 31;
        }
    } else {
        if (month % 2 === 0 && month !== 2) {
            return 30;
        } else if (month === 2) {
            return 28;
        } else {
            return 31;
        }
    }
}
function checkDayMonthYear(day, month, year) {
    // ý tưởng như sau: làm một mảng có độ rộng là 365 với năm ko nhuận và 366 với năm nhuận.
    //      khi nhập giá trị ngày tháng năm của mảng sẽ biết được ngày đó nằm ở vị trí nào từ đó
    //  luận ngược ra ngày tháng năm của chúng ứng dụng cho function bên dưới

    let arrDate=0;
    for (let i= 1; i < month; i++) {
        for (let j = 1; j <= checkMonth(i, year); j++) {
            arrDate=arrDate+1;
        }
    }
    arrDate = arrDate + day;
    console.log(arrDate);
    return arrDate;
}
function counterNum(num,year){
    var day,month;
    let arrDate=0;
    for (let i= 1; i <=12; i++) {
        for (let j = 1; j <= checkMonth(i, year); j++) {
            arrDate=arrDate+1;
            if(num===arrDate){
                // alert('day'+j+'month'+(i));
                day=j;month=i;
                break;
            }
        }
    }
    return [day,month];
}

function getTimeZone() {

        const timezone = document.getElementById('timezone');
        const  d=new Date();
        const DMY = HandleStrTime(d.toUTCString(), " ");
        const HMS = HandleStrTime(DMY[4], ":");


        const day1 = parseInt(DMY[1]);
        const month1 = convertMonth(DMY[2]);
        const year1 = parseInt(DMY[3]);
        const hour =parseInt( HMS[0]);
        const minute =parseInt( HMS[1]);
        const second =parseInt(HMS[2]);


        var muiGio = document.getElementById('timezone').value;
        var hourTimeZone = (hour) + parseInt(muiGio);

        var dayTimeZone =checkDayMonthYear(day1,month1,year1);
        var monthTimeZone;
        var yearTimeZone=year1;
        if (hourTimeZone > 24) {
            dayTimeZone = dayTimeZone + 1;
        }
        else if (hourTimeZone < 0) {
            dayTimeZone = dayTimeZone -1 ;
            hourTimeZone = hourTimeZone + 25;
        }
        let dayTimeZoneUtc;
        let monthTimeZoneUtc;
        if (dayTimeZone > 365 && yearTimeZone % 4 !== 0) {
            dayTimeZone = dayTimeZone - 365;
            yearTimeZone += 1;
            dayTimeZoneUtc = counterNum(dayTimeZone, yearTimeZone)[0];
            monthTimeZoneUtc = counterNum(dayTimeZone, yearTimeZone)[1];
        } else if (dayTimeZone > 366 && yearTimeZone % 4 === 0) {
            dayTimeZone = dayTimeZone - 366;
            yearTimeZone += 1;
            dayTimeZoneUtc = counterNum(dayTimeZone, yearTimeZone)[0];
            monthTimeZoneUtc = counterNum(dayTimeZone, yearTimeZone)[1];
        }

        dayTimeZoneUtc=counterNum(dayTimeZone,yearTimeZone)[0];
        monthTimeZoneUtc=counterNum(dayTimeZone,yearTimeZone)[1];

        const d1=new Date(yearTimeZone,parseInt(monthTimeZoneUtc) - 1 ,dayTimeZoneUtc);
        const thu = convertDay(d1.getDay());

        var timeGMT = document.getElementById('timeGMT');
        timeGMT.innerHTML =thu +"  "+dayTimeZoneUtc + "/" + monthTimeZoneUtc + "/" + year1 + "   " + hourTimeZone + ":" + minute + ":" + second;
        // return [thu, day, month, year, hour, minute, second];

}
var DEM=setInterval(getTimeZone,1000);

function getTimeGMT() {
    //Get timestamp in locale
    var tDate = new Date();
    //Convert timestamp in GMT/UTC format
    var utcDate = tDate.toUTCString();
    console.log('hour: ' + tDate.toUTCString());
    // alert(utcDate);
}


// function SIP_Setting() {
//     var Ele = document.head.appendChild(document.createElement('style'));
//     Ele.innerHTML = '.contentStandard{display:block}';
//     document.getElementById("title-tabTool").innerHTML = "SIP-Setting";
//     return false;
// }
//
// function IAX_Settings() {
//     var Ele = document.head.appendChild(document.createElement('style'));
//     Ele.innerHTML = '.content-IAX-Setting{display:block}';
//     document.getElementById("title-tabTool").innerHTML = "IAX-Setting";
//     return false;
// }
//
// function blackList() {
//     var Ele = document.head.appendChild(document.createElement('style'));
//     Ele.innerHTML = '.content-Blacklist{display:block}';
//     document.getElementById("title-tabTool").innerHTML = "Blacklist";
//     return false;
// }
//
// function callBack_Settings() {
//     var Ele = document.head.appendChild(document.createElement('style'));
//     Ele.innerHTML = '.content-callBack-Settings{display:block}';
//     document.getElementById("title-tabTool").innerHTML = "Callback Settings";
//     return false;
// }
//
// function DateAndTime() {
//     var Ele = document.head.appendChild(document.createElement('style'));
//     Ele.innerHTML = '.content-DateAndTime{display:block}';
//     document.getElementById("title-tabTool").innerHTML = "Date & Time";
//     return false;
// }

function advanced_Settings(evt, tabName) {
    var i;
    let tabContent = document.getElementsByClassName('tab_content_AdSet');
    let tabLinks = document.getElementsByClassName('tab_links_AdSet');

    document.getElementById("title-tabTool").innerHTML = tabName;
    for (i = 0; i < tabContent.length; i++) {
        tabContent[i].style.display = 'none';
    }
    for (i = 0; i < tabLinks; i++) {
        tabLinks[i].className = tabLinks[i].className.replace(" active", "");
    }
    document.getElementById(tabName).style.display = 'block';
    evt.currentTarget.className += " active";
}


function tabItem_SIP(evt, tabName) {
    var i;
    let tabContent = document.getElementsByClassName('tabContent');
    let tabLinks = document.getElementsByClassName('tablinks');
    for (i = 0; i < tabContent.length; i++) {
        tabContent[i].style.display = 'none';
    }
    for (i = 0; i < tabLinks.length; i++) {
        tabLinks[i].className = tabLinks[i].className.replace(" active", "");
    }
    document.getElementById(tabName).style.display = 'block';
    evt.currentTarget.className += " active";
}
function checkWindow(){
    var newWindow=document.getElementById('newWindow');
    newWindow.style.display='block';
}
function iclose(){
    var newWindow=document.getElementById('newWindow');
    newWindow.style.display='none';
    return false;
}

// function accordionTest(){
//     const accordion =document.getElementsByClassName('contentBox');
//     for(let i=0;i<accordion.length;i++){
//         accordion[i].addEventListener('click',function(){
//             this.classList.toggle('active');
//         })
//     }
// }


// function changeStyle() {
//     var Ele = document.head.appendChild(document.createElement('style'));
//     var valueAccordion = document.getElementsByClassName('accordion-item');
//     for (i = 0; i < valueAccordion.length; i++) {
//         if (valueAccordion[i].value == 'accordion-item') {
//             Ele.innerHTML = '.accordion-body{display:none;}';
//         } else {
//             Ele.innerHTML = '.accordion-body{display:block}';
//         }
//     }
// }


// function iconArrow1() {
//     var iconArrow = document.getElementsByClassName('icon-arrow');
//     for (i = 0; i < iconArrow.length; i++) {
//         if (iconArrow[i].className === 'icon-arrow fas fa-caret-square-right') {
//             iconArrow[i].className = 'icon-arrow fas fa-caret-square-down';
//         } else {
//             iconArrow[i].className = 'icon-arrow fas fa-caret-square-right';
//         }
//     }
// }

