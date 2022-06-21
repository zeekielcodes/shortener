// function Copy() {
//   const shortened = document.querySelector("span.output").textContent;
//   const copyButton = document.querySelector(".clickNcopy");
//   if (copyButton.innerHTML === "Copy") {
//     navigator.clipboard.writeText(shortened);
//     copyButton.innerHTML = "Copied!";
//     copyButton.style.backgroundColor = "hsl(257, 27%, 26%)";
//   }
// }

document.querySelector("form").addEventListener("submit", async function () {
  var myHeaders = new Headers();
  myHeaders.append("apikey", "MxXLbkVuDoBCvWzGO9SMQ42SsNduDEO7");

  var raw = document.querySelector("#link").value;

  var requestOptions = {
    method: "POST",
    redirect: "follow",
    headers: myHeaders,
    body: raw,
  };

  try {
    await fetch("https://api.apilayer.com/short_url/hash", requestOptions)
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Something went wrong.");
        }
      })
      .then((result) => {
        var container = document.createElement("div");
        container.setAttribute("class", "shortened");
        var containBoth = document.createElement("span")
        containBoth.setAttribute("class", "out-copy")
        var inputValue = document.createElement("span");
        inputValue.textContent = result.long_url;
        inputValue.setAttribute("class", "input");
        var outputValue = document.createElement("span");
        outputValue.textContent = result.short_url;
        outputValue.setAttribute("class", "output");
        var copyBtn = document.createElement("button");
        copyBtn.innerHTML = "Copy";
        copyBtn.setAttribute("class", "clickNcopy");
        copyBtn.setAttribute("onclick", "Copy()");
        container.append(inputValue);

        container.append(containBoth);

        containBoth.append(outputValue);
        containBoth.append(copyBtn)

        document.querySelector(".records").append(container);
        // console.log(result);
        document.querySelector("span.output").textContent = result.short_url;
      })
      .catch(
        (error) =>
          (document.querySelector("span.error").textContent = error.message)
      );
  } catch {}
  document.querySelector("#link").value = "";
});

function Copy() {
  // document.querySelector(".shortened")
  // document.querySelectorAll("button.clickNcopy").forEach((buttton) => {
    const shortened = document.querySelector("span.output").textContent;
    const copyButton = document.querySelector(".clickNcopy");
    if (copyButton.innerHTML === "Copy") {
      navigator.clipboard.writeText(shortened);
      copyButton.innerHTML = "Copied!";
      copyButton.style.backgroundColor = "hsl(257, 27%, 26%)";
    }
  }
  // );
// }

// var Record = document.querySelector(".records").children;
// let Links = localStorage.getItem("Links");
// function checkReecords() {
//   if (!Links) {
//     document.querySelector(".records").innerHTML = "You have no records yet1";
//     localStorage.setItem("Links", Record);
//   } else {
//     document.querySelector(
//       ".records"
//     ).innerHTML = `<h4>Your Records</h4> ${Reecord}`;
//     localStorage.setItem("Links", Record);
//   }
// }

// checkReecords();
