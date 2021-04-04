var userlist = JSON.parse(localStorage.getItem("users")) || [];

window.onload = () => {
  if (userlist.length > 0) return displayCards(userlist);
  var noDetails = document.createElement("div");
  noDetails.className = "noUser";
  noDetails.innerHTML = "<h1>No User Details Available</h1>";
  document.body.append(noDetails);
};

const displayCards = (userlist) => {
  userlist.forEach((user) => {
    var card = document.createElement("div");
    card.id = user.userId;
    card.className = "user-card";
    card.innerHTML = `<img src=${"./assests/img_avatar.png"} alt="Avatar">
                        <div class="user-card-container">
                        <h4><b>${user.userId}</b></h4> 
                        <p>${user.firstName}</p> 
                        </div>`;
    card.onclick = () => {
      window.location.href = `./user.html?${card.id}`;
    };
    document.getElementById("user-cards-container").append(card);
  });
};
