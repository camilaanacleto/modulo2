const info = $("#info");
const infoBtn = $("#btn-info");
const createBtn = $("#btn-create");
const updateBtn = $("#btn-update");
const deleteBtn = $("#btn-delete");

const name = $("#name");
const phone = $("#phone");
const email = $("#email");


infoBtn.click(async () => {

  const response = await fetch("/info");
  const data = await response.json();
  const element = data[0];

  info.html(`
      <div class="card">
        <div class="card-body">
          <h5 class="card-title">Usuário: ${element.name}</h5>
          <p class="card-text"><strong>Email:</strong><a href="mailto: ${element.mail}"> ${element.email}</a></p>
          <p class="card-text"><strong>Telefone:</strong> ${element.phone}</p>
        </div>
      </div>
    `);

  alert("Linhas adicionadas ao campo de informações com sucesso!");
  infoBtn.remove();
});

createBtn.click(async () => {

  await fetch("/info", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name: name.val(),
      phone: phone.val(),
      email: email.val(),
    }),
  });
  alert("Informações adicionadas com sucesso!");
});

updateBtn.click(async () => {
  console.log(name.val());

  await fetch("/info/1", {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name: name.val(),
      phone: phone.val(),
      email: email.val(),

    }),
  });
  alert("Informações atualizadas com sucesso!");
});

deleteBtn.click(async () => {

  await fetch("/info/1", {
    method: "DELETE",
  });
  alert("Informações deletadas com sucesso!");
});