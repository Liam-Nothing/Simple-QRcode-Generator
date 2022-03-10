function RequestAPI(url, data){
    let xhr = new XMLHttpRequest();
    xhr.open("POST", url, true);
    xhr.setRequestHeader("Content-Type", "application/json");

    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            let json = JSON.parse(xhr.responseText);
            if(json["id"] === 1){
				presentation_content = "";
				for (const [key, value] of Object.entries(json["content"])) {
                    var date_now = new Date();
                    var date_alive = new Date(value["time"]);
                    let color = "blue";
                    let diff_date_second = (date_now.getTime() - date_alive.getTime())/1000;

                    if(diff_date_second < 5*60){
                        color = "green"; 
                    }else if(diff_date_second < 30*60){
                        color = "orange";
                    }else if(diff_date_second < 60*60){
                        color = "red";
                    }
					presentation_content += `<tr><td><p>${value["label"]}</p></td><td><p>${value["content"]}</p></td><td class="dot-container"><span class="dot ${color}"></span></td><td><p class="hide-btn">x</p></td></tr>`;
				}
				document.getElementById("presentation").innerHTML = presentation_content;
            }else{
                document.getElementById("alert-message").innerText = json["message"];
                document.getElementById("alert").classList.add("view");
            }
        }
    };
    xhr.send(data);
}

function PrepareRequest(){
    let url = "api.php";
    let data = JSON.stringify({"api": "view", "pass": "pwdNE__________"});
    RequestAPI(url, data);
}

function Default(){
    PrepareRequest();
	setInterval(PrepareRequest, 1000);
}

Default();