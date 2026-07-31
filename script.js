const revealEls = document.querySelectorAll('.reveal');
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.14 });
revealEls.forEach(el => observer.observe(el));

const slides = document.querySelectorAll('.slide');
const dots = document.querySelectorAll('.dot');
let current = 0;

function showSlide(index) {
  slides.forEach((s,i)=>s.classList.toggle('active', i===index));
  dots.forEach((d,i)=>d.classList.toggle('active', i===index));
  current = index;
}
dots.forEach((dot,i)=>dot.addEventListener('click',()=>showSlide(i)));
setInterval(()=>showSlide((current+1)%slides.length), 3800);

/* =========================================================
   MINI FORMULARIO DE PREFILTRO COMERCIAL
========================================================= */

document.addEventListener("DOMContentLoaded", function () {
  const modal = document.getElementById("creditPrefilter");
  const form = document.getElementById("creditPrefilterForm");

  const openButtons = document.querySelectorAll(
    ".js-open-credit-form"
  );

  const closeButtons = document.querySelectorAll(
    "[data-credit-close]"
  );

  if (!modal || !form || openButtons.length === 0) {
    console.warn(
      "No se encontraron los elementos del formulario de crédito."
    );

    return;
  }

  const whatsappNumber = "573173741958";

  const nameField = document.getElementById("leadName");
  const cityField = document.getElementById("leadCity");
  const experienceField =
    document.getElementById("creditExperience");
  const statusField =
    document.getElementById("creditStatus");
  const financeField =
    document.getElementById("financeEntity");
  const initialField =
    document.getElementById("initialAmount");
  const authorizationField =
    document.getElementById("leadAuthorization");

  const requiredFields = [
    nameField,
    cityField,
    experienceField,
    statusField,
    financeField,
    initialField,
    authorizationField
  ];

  /* ABRIR FORMULARIO */

  function openCreditForm() {
    modal.hidden = false;

    document.body.classList.add(
      "credit-prefilter-open"
    );

    setTimeout(function () {
      if (nameField) {
        nameField.focus();
      }
    }, 100);
  }

  /* CERRAR FORMULARIO */

  function closeCreditForm() {
    modal.hidden = true;

    document.body.classList.remove(
      "credit-prefilter-open"
    );
  }

  /* VALIDAR UN CAMPO */

  function validateField(field) {
    if (!field) {
      return false;
    }

    if (field.type === "checkbox") {
      const authorizationBox = field.closest(
        ".credit-authorization"
      );

      const isValid = field.checked;

      if (authorizationBox) {
        authorizationBox.classList.toggle(
          "is-invalid",
          !isValid
        );
      }

      return isValid;
    }

    const fieldContainer = field.closest(
      ".credit-field"
    );

    const isValid = field.value.trim() !== "";

    if (fieldContainer) {
      fieldContainer.classList.toggle(
        "is-invalid",
        !isValid
      );
    }

    return isValid;
  }

  /* VALIDAR FORMULARIO COMPLETO */

  function validateForm() {
    let formIsValid = true;
    let firstInvalidField = null;

    requiredFields.forEach(function (field) {
      const fieldIsValid = validateField(field);

      if (!fieldIsValid) {
        formIsValid = false;

        if (!firstInvalidField) {
          firstInvalidField = field;
        }
      }
    });

    if (firstInvalidField) {
      firstInvalidField.focus();
    }

    return formIsValid;
  }

  /* ABRIR DESDE EL CTA */

  openButtons.forEach(function (button) {
    button.addEventListener("click", function (event) {
      event.preventDefault();

      openCreditForm();
    });
  });

  /* CERRAR DESDE LA X O EL FONDO */

  closeButtons.forEach(function (button) {
    button.addEventListener("click", function () {
      closeCreditForm();
    });
  });

  /* QUITAR ERROR CUANDO EL USUARIO RESPONDE */

  requiredFields.forEach(function (field) {
    if (!field) {
      return;
    }

    const eventType =
      field.tagName === "SELECT" ||
      field.type === "checkbox"
        ? "change"
        : "input";

    field.addEventListener(eventType, function () {
      validateField(field);
    });
  });

  /* CERRAR CON ESCAPE */

  document.addEventListener(
    "keydown",
    function (event) {
      if (
        event.key === "Escape" &&
        modal.hidden === false
      ) {
        closeCreditForm();
      }
    }
  );

  /* ENVIAR FORMULARIO */

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    if (!validateForm()) {
      return;
    }

    const messageLines = [
      "💻 *QUIERO MI PORTÁTIL HP*",
      "",
      "*Nombre:* " + nameField.value.trim(),
      "*Ciudad:* " + cityField.value.trim(),
      "",
      "*Experiencia crediticia:* " +
        experienceField.value,
      "*Situación actual:* " +
        statusField.value,
      "*Financiera o cupo actual:* " +
        financeField.value,
      "*Inicial disponible:* " +
        initialField.value,
      "",
      "*Producto:* HP 14-dq3502la",
      "*Campaña:* REGRESO_CLASES_HP",
      "*Origen:* Landing Portátiles",
      "",
      "Deseo continuar con mi asesoría y conocer las opciones disponibles."
    ];

    const message = messageLines.join("\n");

    const whatsappURL =
      "https://wa.me/" +
      whatsappNumber +
      "?text=" +
      encodeURIComponent(message);

    window.open(
      whatsappURL,
      "_blank",
      "noopener,noreferrer"
    );

    closeCreditForm();

    form.reset();

    document
      .querySelectorAll(
        ".credit-field.is-invalid, " +
        ".credit-authorization.is-invalid"
      )
      .forEach(function (element) {
        element.classList.remove("is-invalid");
      });
  });
});
/* =========================================================
   POP-UP DE BIENVENIDA Y CONSENTIMIENTO
========================================================= */

document.addEventListener("DOMContentLoaded", () => {
  const modal = document.getElementById("welcomeConsent");
  const cookiesCheck = document.getElementById("cookiesConsentCheck");
  const termsCheck = document.getElementById("termsConsentCheck");
  const acceptButton = document.getElementById("acceptAllConsent");
  const necessaryButton = document.getElementById("necessaryOnlyConsent");
  const closeButtons = document.querySelectorAll("[data-consent-close]");

  if (
    !modal ||
    !cookiesCheck ||
    !termsCheck ||
    !acceptButton ||
    !necessaryButton
  ) {
    return;
  }

  const STORAGE_KEY = "distritecConsentPreference";

  function openConsentModal() {
    modal.hidden = false;
    document.body.classList.add("consent-modal-open");
  }

  function closeConsentModal(preference) {
    const consentData = {
      preference: preference,
      acceptedAt: new Date().toISOString()
    };

    localStorage.setItem(STORAGE_KEY, JSON.stringify(consentData));

    modal.hidden = true;
    document.body.classList.remove("consent-modal-open");

    /*
      Puedes activar aquí herramientas como Meta Pixel o Google Analytics
      únicamente cuando preference sea igual a "all".

      Ejemplo:

      if (preference === "all") {
        cargarMetaPixel();
        cargarGoogleAnalytics();
      }
    */
  }

  function updateAcceptButton() {
    const bothAccepted =
      cookiesCheck.checked && termsCheck.checked;

    acceptButton.disabled = !bothAccepted;
  }

  cookiesCheck.addEventListener("change", updateAcceptButton);
  termsCheck.addEventListener("change", updateAcceptButton);

  acceptButton.addEventListener("click", () => {
    if (cookiesCheck.checked && termsCheck.checked) {
      closeConsentModal("all");
    }
  });

  necessaryButton.addEventListener("click", () => {
    closeConsentModal("necessary");
  });

  closeButtons.forEach((button) => {
    button.addEventListener("click", () => {
      closeConsentModal("necessary");
    });
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && !modal.hidden) {
      closeConsentModal("necessary");
    }
  });

  const savedPreference = localStorage.getItem(STORAGE_KEY);

  if (!savedPreference) {
    openConsentModal();
  }
});