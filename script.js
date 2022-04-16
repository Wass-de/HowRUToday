function updateClock() {
 var now = new Date();
 var dname = now.getDay(),
     mo = now.getMonth(),
     dnum = now.getDate(),
     yr = now.getFullYear(),
     hou = now.getHours(),
     min = now.getMinutes(),
     sec = now.getSeconds(),
     pe = "AM";

     if(hou == 0){
         hou = 12;
     }
     if(hou > 12){
         hou = hou - 12;
         pe = "PM";
     }

     Number.prototype.pad = function(digits){
         for(var n = this.toString(); n.length < digits; n = 0 + n);
     }

     var months = ['Janvier', 'Fevrier', "Mars", "Avril", "Mai", "Juin", "Juillet", "Aout", "Septembre", "Octobre", "Novembre", "Décembre"];
     var week = ["Dimanche", "Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi"];
     var ids= ["dayname", "month", "daynum", "year", "hour", "minutes", "seconds", "period"];
     var values = [week[dname], dnum, months[mo], yr, hou, min, sec, pe];
     for(var i = 0; i < ids.length; i++)
     document.getElementById(ids[i]).firstChild.nodeValue = values[i];
}

function initClock() {
    updateClock();
    window.setInterval("updateClock()", 1);

}