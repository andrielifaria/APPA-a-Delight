

const mensagensRef = ref(db, 'mensagens');
const duvidasRef = ref(db, 'duvidas');

const feedback = document.getElementById("feedbackInput");
const duvidas = document.getElementById("nome");
const newMessageRef = messagesRef.push();

      newMessageRef.set({
        text: message,
        timestamp: Date.now()
      }).then(() => {
        alert("Mensagem enviada!");
        input.value = "";
      }).catch((error) => {
        console.error("Erro ao enviar mensagem:", error);
      });
