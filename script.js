
const zonesInfo = {
  photo: {
    title: "Фотозона (ИИ-фотобудка)",
    image: "images/photo.jpg",
    desc: "Место для совместной фотографии родителя и ребёнка и получения персональных предложений.",
    benefits: [
      "Фото + персональная страница (QR)",
      "Органический трафик",
      "Персонализация офферов"
    ]
  },

  kids: {
    title: "Детская комната",
    image: "images/kids.jpg",
    desc: "Игровое пространство, где родители могут оставить детей во время визита.",
    benefits: [
      "Бесплатно для посетителей",
      "Безопасная игровая среда",
      "Поддерживает длительность визита"
    ]
  },

  coworking: {
    title: "Коворкинг (75 мест)",
    image: "images/coworking.jpg",
    desc: "Современное рабочее пространство для родителей с возможностью бронирования.",
    benefits: [
      "75 мест",
      "Предварительное бронирование",
      "Комфорт и отделение от шума"
    ]
  },

  tree: {
    title: "Финансовое древо семьи",
    image: "images/tree.jpg",
    desc: "Сенсорная стена для визуализации финансовых целей семьи.",
    benefits: [
      "Интерактивная активация",
      "Данные о целях семьи",
      "Маркетинговая активность"
    ]
  },

  meetings: {
    title: "Переговорки (3 комнаты)",
    image: "images/meetings.jpg",
    desc: "Закрытые комнаты для конфиденциальных встреч и консультаций.",
    benefits: [
      "Конфиденциальность",
      "Бронирование",
      "Разные размеры"
    ]
  },

  academy: {
    title: "Альфа Академия (лекторий)",
    image: "images/academy.jpg",
    desc: "Площадка для лекций, мастер-классов и событий для всех возрастов.",
    benefits: [
      "Лекции по финансовой грамотности",
      "Квесты и мероприятия",
      "Укрепление доверия к банку"
    ]
  },

  capsule: {
    title: "Капсула комфорта для сотрудников",
    image: "images/capsule.jpg",
    desc: "Капсула восстановления с режимами релаксации и персонализацией.",
    benefits: [
      "Режимы релакс/перезагрузка",
      "Персонализация по QR",
      "Повышение вовлечённости"
    ]
  },

  reception: {
    title: "Входная зона / ресепшен",
    image: "images/reception.jpg",
    desc: "Зона приветствия для навигации, помощи и записи на сервисы офиса.",
    benefits: [
      "Навигация",
      "Информация о сервисах",
      "Быстрая помощь"
    ]
  }
};


document.querySelectorAll(".zone").forEach(zone => {
  zone.addEventListener("click", () => {
    const id = zone.dataset.zone;
    openModal(id);
  });
});


document.querySelectorAll("#zoneList li").forEach(li => {
  li.addEventListener("click", () => {
    const id = li.dataset.zone;

    const dot = document.querySelector(`.zone[data-zone='${id}'] .dot`);
    if (dot) {
      dot.classList.add("highlight");
      setTimeout(() => dot.classList.remove("highlight"), 600);
    }

    openModal(id);
  });
});


const modal = document.getElementById("modal");
const modalTitle = document.getElementById("modalTitle");
const modalImage = document.getElementById("modalImage");
const modalDesc = document.getElementById("modalDesc");
const modalBenefits = document.getElementById("modalBenefits");
const closeBtn = document.getElementById("closeBtn");

function openModal(id) {
  const info = zonesInfo[id];
  if (!info) return;

  modalTitle.textContent = info.title;
  modalImage.src = info.image;
  modalDesc.textContent = info.desc;

  modalBenefits.innerHTML = "";
  info.benefits.forEach(b => {
    const li = document.createElement("li");
    li.textContent = b;
    modalBenefits.appendChild(li);
  });

  modal.classList.add("open");
  modal.setAttribute("aria-hidden", "false");
}

function closeModal() {
  modal.classList.remove("open");
  modal.setAttribute("aria-hidden", "true");
}

closeBtn.addEventListener("click", closeModal);

modal.addEventListener("click", e => {
  if (e.target === modal) closeModal();
});

document.addEventListener("keydown", e => {
  if (e.key === "Escape") closeModal();
});

