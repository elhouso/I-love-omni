var copyip = function(button) {
    var ip =button.children[0];
    var copy = button.children[1];

    ip.select();
    ip.setSelectionRange(0, 99999); // For mobile devices
    navigator.clipboard.writeText(ip.value);

    copy.innerHTML = "Copied!";
    button.setAttribute("style", "background:rgb(213, 255, 185);");

    setTimeout(function(){
        copy.innerHTML = "Copy IP";
        button.setAttribute("style", "");
    }, 5000)
}