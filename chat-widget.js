// Chat flotante - Asistente Contable (widget compartido)
// Generado automaticamente a partir de menu.html para reutilizarse en todos los modulos
(function(){
  if (document.getElementById('floating-chat')) return;
  var style = document.createElement('style');
  style.textContent = "\n    #floating-chat * { box-sizing: border-box; }\n    #chat-window { display: none; flex-direction: column; }\n    #chat-window.open { display: flex; }\n    @keyframes chat-blink { 0%,100%{opacity:0.3} 50%{opacity:1} }\n    @keyframes chat-slide-up {\n      from { opacity:0; transform: translateY(20px) scale(0.95); }\n      to   { opacity:1; transform: translateY(0) scale(1); }\n    }\n    #chat-window.open { animation: chat-slide-up 0.25s ease; }\n    #chat-toggle-btn { transition: transform 0.2s, box-shadow 0.2s; }\n    #chat-toggle-btn:hover { transform: scale(1.1) !important; box-shadow: 0 6px 22px rgba(45,108,223,0.55) !important; }\n    #chat-send-btn:hover { opacity: 0.85; }\n    #chat-input:focus { border-color: #2d6cdf !important; background: #fff !important; outline: none !important; }\n    #chat-messages::-webkit-scrollbar { width: 4px; }\n    #chat-messages::-webkit-scrollbar-thumb { background: #d0d7e2; border-radius: 4px; }\n  ";
  document.head.appendChild(style);
  document.body.insertAdjacentHTML('beforeend', "<div id=\"floating-chat\" style=\"position:fixed;bottom:24px;right:24px;z-index:99999;font-family:'Segoe UI',system-ui,sans-serif;display:flex;flex-direction:column;align-items:flex-end;\">\n\n    <!-- Ventana de chat -->\n    <div id=\"chat-window\" style=\"\n      flex-direction:column;\n      width:320px;\n      height:430px;\n      background:#fff;\n      border-radius:18px;\n      box-shadow:0 10px 40px rgba(0,0,0,0.18);\n      overflow:hidden;\n      margin-bottom:12px;\n      border:1px solid #e0e7f0;\n    \">\n      <!-- Header -->\n      <div style=\"background:linear-gradient(135deg,#2d6cdf,#1a4fa8);padding:14px 16px;display:flex;align-items:center;justify-content:space-between;color:#fff;\">\n        <div style=\"display:flex;align-items:center;gap:10px;\">\n          <div style=\"width:38px;height:38px;background:rgba(255,255,255,0.2);border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:20px;\">🎓</div>\n          <div>\n            <div style=\"font-weight:700;font-size:14px;letter-spacing:0.2px;\">Asistente Contable</div>\n            <div style=\"font-size:11px;opacity:0.85;display:flex;align-items:center;gap:4px;\">\n              <span style=\"width:7px;height:7px;background:#4dff91;border-radius:50%;display:inline-block;\"></span> En línea\n            </div>\n          </div>\n        </div>\n        <button id=\"chat-close-btn\" style=\"background:none;border:none;color:#fff;font-size:18px;cursor:pointer;padding:4px;line-height:1;border-radius:50%;width:28px;height:28px;display:flex;align-items:center;justify-content:center;\" title=\"Cerrar\">✕</button>\n      </div>\n\n      <!-- Mensajes -->\n      <div id=\"chat-messages\" style=\"flex:1;overflow-y:auto;padding:14px;display:flex;flex-direction:column;gap:10px;background:#f4f7fc;scroll-behavior:smooth;\">\n        <div style=\"display:flex;gap:8px;align-items:flex-end;\">\n          <div style=\"width:28px;height:28px;border-radius:50%;background:#2d6cdf;display:flex;align-items:center;justify-content:center;font-size:14px;flex-shrink:0;\">🎓</div>\n          <div style=\"background:#fff;border:1px solid #e2e8f0;border-radius:14px 14px 14px 2px;padding:10px 13px;font-size:13px;color:#2d3748;max-width:220px;box-shadow:0 1px 4px rgba(0,0,0,0.06);line-height:1.5;\">\n            ¡Hola! 👋 Soy tu <strong>Asistente de Contabilidad</strong>. ¿En qué puedo ayudarte hoy?\n          </div>\n        </div>\n        <div style=\"display:flex;gap:8px;align-items:flex-end;\">\n          <div style=\"width:28px;height:28px;border-radius:50%;background:#2d6cdf;display:flex;align-items:center;justify-content:center;font-size:14px;flex-shrink:0;\">🎓</div>\n          <div style=\"background:#fff;border:1px solid #e2e8f0;border-radius:14px 14px 14px 2px;padding:10px 13px;font-size:13px;color:#2d3748;max-width:220px;box-shadow:0 1px 4px rgba(0,0,0,0.06);line-height:1.5;\">\n            Puedo explicarte sobre la ecuación contable, los módulos, el libro diario, estados financieros y más 📚\n          </div>\n        </div>\n      </div>\n\n      <!-- Sugerencias rápidas -->\n      <div id=\"chat-suggestions\" style=\"padding:8px 12px;background:#f4f7fc;border-top:1px solid #e8edf4;display:flex;gap:6px;flex-wrap:wrap;\">\n        <button class=\"chat-suggestion\" data-msg=\"¿Qué es la ecuación contable?\" style=\"background:#e8f0fe;border:1px solid #c5d5f7;border-radius:12px;padding:5px 10px;font-size:11px;color:#2d6cdf;cursor:pointer;white-space:nowrap;\">⚖️ Ecuación contable</button>\n        <button class=\"chat-suggestion\" data-msg=\"¿Qué es el Debe y el Haber?\" style=\"background:#e8f0fe;border:1px solid #c5d5f7;border-radius:12px;padding:5px 10px;font-size:11px;color:#2d6cdf;cursor:pointer;white-space:nowrap;\">📒 Debe y Haber</button>\n        <button class=\"chat-suggestion\" data-msg=\"¿Qué es el ISV 15%?\" style=\"background:#e8f0fe;border:1px solid #c5d5f7;border-radius:12px;padding:5px 10px;font-size:11px;color:#2d6cdf;cursor:pointer;white-space:nowrap;\">🇭🇳 ISV 15%</button>\n      </div>\n\n      <!-- Input -->\n      <div style=\"padding:10px 12px;background:#fff;border-top:1px solid #e8edf4;display:flex;gap:8px;align-items:center;\">\n        <input id=\"chat-input\" type=\"text\" placeholder=\"Escribe tu pregunta...\" style=\"flex:1;border:1.5px solid #dde2ea;border-radius:20px;padding:9px 14px;font-size:13px;color:#333;background:#f7f9fc;font-family:inherit;\" />\n        <button id=\"chat-send-btn\" style=\"background:linear-gradient(135deg,#2d6cdf,#1a4fa8);border:none;border-radius:50%;width:38px;height:38px;cursor:pointer;display:flex;align-items:center;justify-content:center;color:#fff;font-size:16px;flex-shrink:0;box-shadow:0 2px 8px rgba(45,108,223,0.4);\">➤</button>\n      </div>\n    </div>\n\n    <!-- Botón flotante -->\n    <div style=\"position:relative;display:inline-block;\">\n      <button id=\"chat-toggle-btn\" style=\"width:58px;height:58px;border-radius:50%;background:linear-gradient(135deg,#2d6cdf,#1a4fa8);border:none;cursor:pointer;display:flex;align-items:center;justify-content:center;font-size:26px;box-shadow:0 4px 18px rgba(45,108,223,0.45);color:#fff;\" title=\"Asistente Contable\" aria-label=\"Abrir asistente\">💬</button>\n      <span id=\"chat-badge\" style=\"position:absolute;top:-4px;right:-4px;width:20px;height:20px;background:#ff4444;border-radius:50%;font-size:11px;color:#fff;display:flex;align-items:center;justify-content:center;font-weight:700;border:2px solid #fff;pointer-events:none;\">2</span>\n    </div>\n  </div>");

  (function() {
    // Base de conocimiento de contabilidad
    const KB = [
      {
        keys: ['ecuacion','activo','pasivo','patrimonio','formula','base'],
        reply: '⚖️ <strong>Ecuación Contable:</strong><br><code>Activo = Pasivo + Patrimonio</code><br>Es el principio fundamental. Todo lo que la empresa tiene (Activo) fue financiado por deudas (Pasivo) o por los dueños (Patrimonio). ¡El Módulo 1 lo explica con ejemplos hondureños!'
      },
      {
        keys: ['debe','haber','debito','credito','naturaleza','cargo','abono'],
        reply: '📒 <strong>Debe y Haber:</strong><br>• <strong>DEBE</strong> (izquierda): aumenta Activos y Gastos<br>• <strong>HABER</strong> (derecha): aumenta Pasivos, Patrimonio e Ingresos<br>La partida doble garantiza que Debe = Haber siempre. Ver Módulo 4 🎯'
      },
      {
        keys: ['isv','impuesto','15','ventas','impuesto sobre ventas'],
        reply: '🇭🇳 <strong>ISV 15% en Honduras:</strong><br>El Impuesto Sobre Ventas es del 15% sobre el precio de venta. Se registra como: Cuentas por Cobrar = Ventas + ISV por Pagar. El Módulo 5 (Libro Diario) tiene ejemplos completos con SAR y ENEE.'
      },
      {
        keys: ['libro diario','asiento','registro','cronologico','diario'],
        reply: '📖 <strong>Libro Diario:</strong><br>Es el registro cronológico de todas las transacciones. Cada asiento incluye: fecha, cuentas, Debe, Haber y descripción. Aplica la partida doble y el ISV 15%. ¡Explóralo en el Módulo 5! ✏️'
      },
      {
        keys: ['libro mayor','mayorizar','cuenta t','saldo','balance comprobacion'],
        reply: '📋 <strong>Libro Mayor:</strong><br>Clasifica las transacciones por cuenta usando las "Cuentas T". El saldo de cada cuenta se calcula restando el menor al mayor lado. El Módulo 6 tiene mayorización animada paso a paso.'
      },
      {
        keys: ['estados financieros','balance general','estado resultados','p&g','perdidas','ganancias'],
        reply: '🏛️ <strong>Estados Financieros:</strong><br>• <strong>Balance General:</strong> Activo = Pasivo + Patrimonio en una fecha<br>• <strong>Estado de Resultados:</strong> Ingresos - Gastos = Utilidad<br>La utilidad conecta ambos estados. Ver Módulo 7.'
      },
      {
        keys: ['ciclo contable','ciclo','apertura','cierre','proceso'],
        reply: '🔄 <strong>Ciclo Contable (7 pasos):</strong><br>1. Apertura → 2. Transacciones → 3. Libro Diario → 4. Libro Mayor → 5. Balance de Comprobación → 6. Ajustes → 7. Cierre<br>El Módulo 8 lo simula completo.'
      },
      {
        keys: ['ajuste','ajustes','prepagado','diferido','devengado','accrual'],
        reply: '🔧 <strong>Asientos de Ajuste (NIIF PYMES):</strong><br>Los 4 tipos: prepagados, diferidos, gastos devengados e ingresos devengados. Se registran al final del período para presentar cifras reales. Módulo 9.'
      },
      {
        keys: ['hoja trabajo','planilla','10 columnas','worksheet'],
        reply: '📊 <strong>Hoja de Trabajo (10 columnas):</strong><br>Organiza: Balance de Comprobación sin ajustes → Ajustes → BC ajustado → Estado de Resultados → Balance General. Es el puente entre el Libro Mayor y los Estados Financieros. Módulo 10.'
      },
      {
        keys: ['ingresos','gastos','resultado','utilidad','perdida','periodo'],
        reply: '📈 <strong>Ingresos y Gastos:</strong><br>• <strong>Ingresos</strong> aumentan el Patrimonio (Haber)<br>• <strong>Gastos</strong> disminuyen el Patrimonio (Debe)<br><strong>Utilidad = Ingresos - Gastos</strong><br>Si es negativo = Pérdida. Ver Módulo 3.'
      },
      {
        keys: ['subcuenta','circulante','corriente','no corriente','clasificacion','componente'],
        reply: '🌳 <strong>Subcuentas por Componente:</strong><br>• <strong>Activo Corriente:</strong> efectivo, cuentas por cobrar, inventario<br>• <strong>Activo No Corriente:</strong> propiedad, equipo<br>• <strong>Pasivo Corriente/No Corriente</strong><br>• <strong>Patrimonio</strong><br>Módulo 2 con ISV 15%.'
      },
      {
        keys: ['niif','pymes','norma','internacional','ifrs'],
        reply: '📑 <strong>NIIF PYMES:</strong><br>Normas Internacionales de Información Financiera para Pequeñas y Medianas Empresas. Honduras las adoptó para mejorar la transparencia contable. Los Módulos 9 y 10 se basan en la Sección 2.36.'
      },
      {
        keys: ['modulo','modulos','cuantos','hay','contenido','temas'],
        reply: '📚 <strong>10 Módulos disponibles:</strong><br>1️⃣ Ecuación Contable · 2️⃣ Subcuentas · 3️⃣ Ingresos y Gastos · 4️⃣ Naturaleza de Cuentas · 5️⃣ Libro Diario · 6️⃣ Libro Mayor · 7️⃣ Estados Financieros · 8️⃣ Ciclo Contable · 9️⃣ Ajustes · 🔟 Hoja de Trabajo'
      },
      {
        keys: ['partida doble','doble','principio','contable','regla'],
        reply: '⚡ <strong>Partida Doble:</strong><br>Por cada transacción contable siempre hay AL MENOS dos efectos: uno en el Debe y otro en el Haber, por el mismo importe. Así se mantiene el equilibrio de la ecuación contable. Módulo 4.'
      },
      {
        keys: ['hola','hi','buenos','buenas','saludos','ola'],
        reply: '¡Hola! 👋 Soy tu asistente de <strong>Contabilidad Interactiva</strong>. Puedes preguntarme sobre la ecuación contable, el Debe y Haber, el ISV 15%, los libros contables, estados financieros y más. ¿Qué tema quieres explorar? 📚'
      },
      {
        keys: ['gracias','thank','perfecto','excelente','genial'],
        reply: '¡Con mucho gusto! 😊 Si tienes más preguntas sobre contabilidad, aquí estaré. ¡Mucho éxito en el estudio! 🎓'
      }
    ];

    const defaultReplies = [
      '🤔 No encontré esa respuesta en mi base de datos. Te recomiendo revisar el módulo relacionado o escribir palabras clave como: <em>ecuación, Debe, Haber, diario, mayor, ajustes, NIIF</em>.',
      '📖 Esa es una pregunta interesante. Por ahora te sugiero explorar los módulos del menú — están ordenados de lo más básico a lo más avanzado. ¿Sobre qué módulo tienes dudas?',
      '💡 Intenta ser más específico, por ejemplo: "¿qué es el ISV?", "¿cómo funciona el libro diario?". Estoy aquí para ayudarte.'
    ];
    let defaultIdx = 0;

    function getBotReply(msg) {
      const lower = msg.toLowerCase();
      for (const item of KB) {
        if (item.keys.some(k => lower.includes(k))) {
          return item.reply;
        }
      }
      return defaultReplies[defaultIdx++ % defaultReplies.length];
    }

    const chatWindow   = document.getElementById('chat-window');
    const toggleBtn    = document.getElementById('chat-toggle-btn');
    const closeBtn     = document.getElementById('chat-close-btn');
    const input        = document.getElementById('chat-input');
    const sendBtn      = document.getElementById('chat-send-btn');
    const messagesEl   = document.getElementById('chat-messages');
    const badge        = document.getElementById('chat-badge');
    const suggestions  = document.querySelectorAll('.chat-suggestion');
    let isOpen = false;

    function scrollBottom() {
      messagesEl.scrollTop = messagesEl.scrollHeight;
    }

    function addMsg(html, isUser) {
      const wrap = document.createElement('div');
      wrap.style.cssText = 'display:flex;gap:8px;align-items:flex-end;' + (isUser ? 'flex-direction:row-reverse;' : '');

      if (!isUser) {
        const av = document.createElement('div');
        av.style.cssText = 'width:28px;height:28px;border-radius:50%;background:#2d6cdf;display:flex;align-items:center;justify-content:center;font-size:14px;flex-shrink:0;';
        av.textContent = '🎓';
        wrap.appendChild(av);
      }

      const bubble = document.createElement('div');
      bubble.style.cssText = isUser
        ? 'background:linear-gradient(135deg,#2d6cdf,#1a4fa8);color:#fff;border-radius:14px 14px 2px 14px;padding:10px 13px;font-size:13px;max-width:220px;box-shadow:0 1px 4px rgba(0,0,0,0.12);line-height:1.5;'
        : 'background:#fff;border:1px solid #e2e8f0;border-radius:14px 14px 14px 2px;padding:10px 13px;font-size:13px;color:#2d3748;max-width:225px;box-shadow:0 1px 4px rgba(0,0,0,0.06);line-height:1.5;';
      if (isUser) {
        bubble.textContent = html;
      } else {
        bubble.innerHTML = html;
      }
      wrap.appendChild(bubble);
      messagesEl.appendChild(wrap);
      scrollBottom();
    }

    function showTyping() {
      const d = document.createElement('div');
      d.id = 'chat-typing';
      d.style.cssText = 'display:flex;gap:8px;align-items:flex-end;';
      d.innerHTML = '<div style="width:28px;height:28px;border-radius:50%;background:#2d6cdf;display:flex;align-items:center;justify-content:center;font-size:14px;">🎓</div><div style="background:#fff;border:1px solid #e2e8f0;border-radius:14px 14px 14px 2px;padding:10px 14px;"><span style="display:inline-flex;gap:3px;"><span style="animation:chat-blink 1s infinite;font-size:16px;line-height:1;color:#2d6cdf;">●</span><span style="animation:chat-blink 1s infinite 0.3s;font-size:16px;line-height:1;color:#2d6cdf;">●</span><span style="animation:chat-blink 1s infinite 0.6s;font-size:16px;line-height:1;color:#2d6cdf;">●</span></span></div>';
      messagesEl.appendChild(d);
      scrollBottom();
    }

    function sendMessage(text) {
      const msg = (text || input.value).trim();
      if (!msg) return;
      input.value = '';
      addMsg(msg, true);
      showTyping();
      setTimeout(function() {
        const t = document.getElementById('chat-typing');
        if (t) t.remove();
        addMsg(getBotReply(msg), false);
      }, 900 + Math.random() * 600);
    }

    function toggleChat() {
      isOpen = !isOpen;
      if (isOpen) {
        chatWindow.classList.add('open');
        badge.style.display = 'none';
        toggleBtn.textContent = '✕';
        toggleBtn.title = 'Cerrar';
        setTimeout(function() { input.focus(); }, 300);
      } else {
        chatWindow.classList.remove('open');
        toggleBtn.textContent = '💬';
        toggleBtn.title = 'Asistente Contable';
      }
    }

    toggleBtn.addEventListener('click', toggleChat);
    closeBtn.addEventListener('click', function() { if (isOpen) toggleChat(); });
    sendBtn.addEventListener('click', function() { sendMessage(); });
    input.addEventListener('keypress', function(e) { if (e.key === 'Enter') sendMessage(); });
    suggestions.forEach(function(btn) {
      btn.addEventListener('click', function() {
        sendMessage(btn.getAttribute('data-msg'));
        document.getElementById('chat-suggestions').style.display = 'none';
      });
    });
  })();
  
})();

