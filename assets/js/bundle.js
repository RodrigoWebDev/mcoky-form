/* 

                                         |
                                         |
                                         |
                                         |
   _______                   ________    |
  |ooooooo|      ____       | __  __ |   |
  |[]+++[]|     [____]      |/  \/  \|   |
  |+ ___ +|     ]()()[      |\__/\__/|   |
  |:|   |:|   ___\__/___    |[][][][]|   |
  |:|___|:|  |__|    |__|   |++++++++|   |
  |[]===[]|   |_|_/\_|_|    | ______ |   |
_ ||||||||| _ | | __ | | __ ||______|| __|
  |_______|   |_|[::]|_|    |________|   \
              \_|_||_|_/               jro\
                |_||_|                     \
               _|_||_|_                     \
      ____    |___||___|                     \
     /  __\          ____                     \
     \( oo          (___ \                     \
     _\_o/           oo~)/
    / \|/ \         _\-_/_
   / / __\ \___    / \|/  \
   \ \|   |__/_)  / / .- \ \
    \/_)  |       \ \ .  /_/
     ||___|        \/___(_/
     | | |          | |  |
     | | |          | |  |
     |_|_|          |_|__|
     [__)_)        (_(___]
*/

/*

  ______                _   _                 
 |  ____|              | | (_)                
 | |__ _   _ _ __   ___| |_ _  ___  _ __  ___ 
 |  __| | | | '_ \ / __| __| |/ _ \| '_ \/ __|
 | |  | |_| | | | | (__| |_| | (_) | | | \__ \
 |_|   \__,_|_| |_|\___|\__|_|\___/|_| |_|___/
                                              
                                              

*/

const selector = function(element) {
  if (selector === undefined) return null;
  return document.querySelector(element);
};

window.selector = selector;
window.$ === undefined && (window.$ = selector);

const create = element => {
  if (element === undefined) {
    return null;
  } else {
    return document.createElement(element);
  }
};

function renderPageUsers(users) {
  console.log("users", users);
  app.classList.add("logged");
  Login.style.display = "none";

  const Ul = create("ul");
  Ul.classList.add("container");

  users.map(e => {
    let { login, avatar_url } = e;
    let li = create("li");
    li.innerHTML = `<img src="${avatar_url}" alt="${login}"><span>${login}</span>`;
    Ul.append(li);
  });

  app.appendChild(Ul);
}

/* 

                                      _     
     /\                              | |    
    /  \   _ __  _ __   ___ _ __   __| |___ 
   / /\ \ | '_ \| '_ \ / _ \ '_ \ / _` / __|
  / ____ \| |_) | |_) |  __/ | | | (_| \__ \
 /_/    \_\ .__/| .__/ \___|_| |_|\__,_|___/
          | |   | |                         
          |_|   |_|                         

*/

const app = selector("#app");

const Login = create("div");
Login.classList.add("login");

const Logo = create("img");
Logo.src = "./assets/images/logo.svg";
Logo.classList.add("logo");

const Loader = create("div");
Loader.classList.add("lds-roller");
Loader.innerHTML = `<div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div>`;

const Form = create("form");

Form.innerHTML = `
  <form>
    <input type="email" placeholder="Entre com seu email"/> 
    <input type="password" placeholder="Digite sua senha supersecreta"/>
    <button type="submit" disabled>Entrar</button> 
  </form>
`;

/* 
    
  ______               _       
 |  ____|             | |      
 | |____   _____ _ __ | |_ ___ 
 |  __\ \ / / _ \ '_ \| __/ __|
 | |___\ V /  __/ | | | |_\__ \
 |______\_/ \___|_| |_|\__|___/
                               
                               

*/

Form.oninput = e => {
  const [email, password, button] = e.target.parentElement.children;
  !email.validity.valid || !email.value || password.value.length <= 5
    ? button.setAttribute("disabled", "disabled")
    : button.removeAttribute("disabled");
  console.log("form input", email, password);
};

Form.onsubmit = async e => {
  e.preventDefault();

  //Loader
  selector("#app").appendChild(Loader);

  const users = await getDevelopersList(
    "https://www.mocky.io/v2/5dba68fb3000007400028eb5"
  );

  selector(".lds-roller").style.display = "none";
  renderPageUsers(users);
};

app.appendChild(Logo);
Login.appendChild(Form);

/*

                                
     /\                         
    /  \   ___ _   _ _ __   ___ 
   / /\ \ / __| | | | '_ \ / __|
  / ____ \\__ \ |_| | | | | (__ 
 /_/    \_\___/\__, |_| |_|\___|
                __/ |           
               |___/            

*/

async function getDevelopersList(url) {
  let response = await fetch(url);
  if (response.ok) {
    let json = await response.json();
    return json;
  } else {
    alert("HTTP-Error: " + response.status);
  }
}

// init
(async function() {
  const rawToken = "";
  const token = rawToken ? rawToken.split(".") : null;
  if (!token || token[2] < new Date().getTime()) {
    localStorage.removeItem("token");
    location.href = "#login";
    app.appendChild(Login);
  } else {
    location.href = "#users";
    const users = await getDevelopersList(atob(token[1]));
    renderPageUsers(users);
  }
})();
