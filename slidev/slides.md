---
theme: default
background: linear-gradient(135deg, #0EA5E9 0%, #6366F1 50%, #8B5CF6 100%)
class: text-center text-white
highlighter: shiki
lineNumbers: false
drawings:
  persist: false
transition: slide-left
title: Toán 6 - Bài 2 (Slidev)
mdc: true
---

<div class="inline-block px-4 py-1.5 rounded-full bg-white/20 text-white font-bold text-xs tracking-wider mb-4">
  ✨ CHƯƠNG TRÌNH TOÁN 6 - BÀI 2 (SLIDEV EDITION)
</div>

# SỐ TỰ NHIÊN, HỆ THẬP PHÂN & SỐ LA MÃ

<p class="text-lg text-purple-100 font-semibold mt-2">
  🖐️ Bí mật 10 ngón tay loài người & Mật mã đấu sĩ cổ đại 🏛️
</p>

<div class="mt-8 inline-flex items-center gap-6 bg-white/15 px-6 py-2.5 rounded-full backdrop-blur-md text-sm font-bold">
  <span>👧 Học sinh: <b>Phương Thảo</b></span>
  <span>⏱️ Thời lượng: <b>2 Tiết (90 phút)</b></span>
</div>

---
layout: default
---

# 🎯 3 Trạm Khám Phá Của Bài Học

<div class="grid grid-cols-3 gap-4 mt-6">

<div v-click class="p-4 rounded-2xl bg-indigo-50 border-2 border-indigo-200 shadow-sm">
  <div class="text-3xl mb-2">📏</div>
  <h3 class="font-bold text-indigo-900 text-base mb-1">Trạm 1: Tia Số</h3>
  <p class="text-xs text-gray-600 leading-relaxed">
    Biểu diễn trên tia số, so sánh số và tìm <b>số liền trước, liền sau</b>.
  </p>
</div>

<div v-click class="p-4 rounded-2xl bg-pink-50 border-2 border-pink-200 shadow-sm">
  <div class="text-3xl mb-2">🔟</div>
  <h3 class="font-bold text-pink-900 text-base mb-1">Trạm 2: Hệ Thập Phân</h3>
  <p class="text-xs text-gray-600 leading-relaxed">
    Bí mật 10 chữ số, giá trị vị trí ghế ngồi & cấu tạo số $\overline{ab}, \overline{abc}$.
  </p>
</div>

<div v-click class="p-4 rounded-2xl bg-amber-50 border-2 border-amber-200 shadow-sm">
  <div class="text-3xl mb-2">🏛️</div>
  <h3 class="font-bold text-amber-900 text-base mb-1">Trạm 3: Mật Mã La Mã</h3>
  <p class="text-xs text-gray-600 leading-relaxed">
    Thuộc lòng quy tắc $\text{I}, \text{V}, \text{X}$, xem đồng hồ cổ & số thế kỷ.
  </p>
</div>

</div>

---
layout: default
---

# 📏 1. Tia Số & So Sánh Số Tự Nhiên

<div class="p-3 bg-indigo-50 rounded-xl border border-indigo-200 text-sm text-indigo-950 mb-4">
  <b>Định nghĩa:</b> Tia số bắt đầu từ gốc <b>0</b>, các số cách đều nhau và mũi tên kéo dài mãi sang bên phải $\to$.
</div>

<!-- Vẽ tia số bằng Tailwind -->
<div class="bg-white p-4 rounded-xl border-2 border-slate-200 my-4 relative h-16 flex items-center justify-between px-6">
  <div class="absolute left-6 right-8 h-1 bg-indigo-600 rounded"></div>
  <div class="absolute right-4 w-0 h-0 border-t-8 border-b-8 border-l-12 border-transparent border-l-indigo-600"></div>
  
  <div class="relative z-10 flex flex-col items-center"><div class="w-1 h-3.5 bg-indigo-600"></div><span class="text-xs font-bold text-indigo-900 mt-1">0</span></div>
  <div class="relative z-10 flex flex-col items-center"><div class="w-1 h-3.5 bg-indigo-600"></div><span class="text-xs font-bold text-indigo-900 mt-1">1</span></div>
  <div class="relative z-10 flex flex-col items-center"><div class="w-1 h-3.5 bg-indigo-600"></div><span class="text-xs font-bold text-indigo-900 mt-1">2</span></div>
  <div class="relative z-10 flex flex-col items-center"><div class="w-1 h-3.5 bg-indigo-600"></div><span class="text-xs font-bold text-indigo-900 mt-1">3</span></div>
  <div class="relative z-10 flex flex-col items-center"><div class="w-1 h-3.5 bg-indigo-600"></div><span class="text-xs font-bold text-indigo-900 mt-1">4</span></div>
  <div class="relative z-10 flex flex-col items-center"><div class="w-1 h-3.5 bg-indigo-600"></div><span class="text-xs font-bold text-indigo-900 mt-1">5</span></div>
  <div class="relative z-10 flex flex-col items-center"><div class="w-1 h-3.5 bg-indigo-600"></div><span class="text-xs font-bold text-indigo-900 mt-1">...</span></div>
</div>

<div class="grid grid-cols-2 gap-4 mt-4" v-click>
  <div class="p-3 bg-emerald-50 rounded-xl border border-emerald-200">
    <h4 class="font-bold text-emerald-800 text-sm">👈 Nằm bên trái = NHỎ HƠN:</h4>
    <p class="text-xs text-gray-700 mt-1">Số 2 nằm bên trái số 5 $\implies 2 < 5$.</p>
  </div>
  <div class="p-3 bg-rose-50 rounded-xl border border-rose-200">
    <h4 class="font-bold text-rose-800 text-sm">👉 Nằm bên phải = LỚN HƠN:</h4>
    <p class="text-xs text-gray-700 mt-1">Số 5 nằm bên phải số 2 $\implies 5 > 2$.</p>
  </div>
</div>

---
layout: default
---

# Số Liền Trước & Số Liền Sau

<div class="grid grid-cols-3 gap-4 mt-6 text-center">

<div v-click class="p-4 rounded-2xl bg-rose-50 border-2 border-rose-200">
  <span class="px-3 py-1 bg-rose-100 text-rose-700 rounded-full font-bold text-xs">BÊN TRÁI (-1)</span>
  <div class="text-3xl font-black text-rose-600 my-2">99</div>
  <h4 class="font-bold text-rose-900 text-sm">Số Liền Trước</h4>
  <p class="text-xs text-gray-500">Nhỏ hơn 1 đơn vị ($100 - 1$)</p>
</div>

<div class="p-4 rounded-2xl bg-indigo-50 border-2 border-indigo-300 shadow-md transform scale-105">
  <span class="px-3 py-1 bg-indigo-100 text-indigo-700 rounded-full font-bold text-xs">SỐ ĐANG XÉT</span>
  <div class="text-4xl font-black text-indigo-700 my-2">100</div>
  <h4 class="font-bold text-indigo-950 text-sm">Số Trung Tâm</h4>
  <p class="text-xs text-gray-500">(Mốc so sánh)</p>
</div>

<div v-click class="p-4 rounded-2xl bg-emerald-50 border-2 border-emerald-200">
  <span class="px-3 py-1 bg-emerald-100 text-emerald-700 rounded-full font-bold text-xs">BÊN PHẢI (+1)</span>
  <div class="text-3xl font-black text-emerald-600 my-2">101</div>
  <h4 class="font-bold text-emerald-900 text-sm">Số Liền Sau</h4>
  <p class="text-xs text-gray-500">Lớn hơn 1 đơn vị ($100 + 1$)</p>
</div>

</div>

<div v-click class="p-3 bg-amber-50 rounded-xl border border-amber-200 text-xs text-amber-900 mt-6 text-center">
  ⚠️ <b>Bẫy đặc biệt:</b> Số $0$ là số nhỏ nhất trong $\mathbb{N}$ nên <b>số 0 KHÔNG CÓ số liền trước</b>!
</div>

---
layout: default
---

# 🖐️ Bí Mật 10 Ngón Tay Hệ Thập Phân

<div class="p-4 bg-indigo-50 rounded-2xl border-2 border-indigo-200 text-sm text-indigo-950 leading-relaxed mb-4">
  🤔 <b>Tại sao loài người dùng 10 chữ số:</b> $\{0, 1, 2, 3, 4, 5, 6, 7, 8, 9\}$? <br>
  👉 <i>Vì tổ tiên chúng ta đếm bằng <b>10 ngón tay</b>! Cứ đếm đủ 10 đơn vị thì gom thành <b>1 chục</b>.</i>
</div>

<div class="grid grid-cols-2 gap-4 mt-4" v-click>
  <div class="p-4 bg-white rounded-xl border-2 border-slate-200 shadow-sm">
    <div class="text-2xl mb-1">🪵</div>
    <h4 class="font-bold text-indigo-900 text-sm">10 Đơn vị = 1 Chục (10)</h4>
    <p class="text-xs text-gray-500 mt-1">10 que tính rời gộp thành 1 bó chục.</p>
  </div>
  <div class="p-4 bg-white rounded-xl border-2 border-slate-200 shadow-sm">
    <div class="text-2xl mb-1">📦</div>
    <h4 class="font-bold text-emerald-900 text-sm">10 Chục = 1 Trăm (100)</h4>
    <p class="text-xs text-gray-500 mt-1">10 bó chục gộp thành 1 tấm trăm.</p>
  </div>
</div>

---
layout: default
---

# 👑 Vị Trí Ghế Ngồi Quyết Định Quyền Lực

<p class="text-sm text-gray-600 mb-3">Xem xét số <b>$333$</b>: Cả 3 chữ số đều là số $3$, nhưng quyền lực khác nhau hoàn toàn!</p>

<div class="grid grid-cols-3 gap-4 text-center mt-2">
  <div v-click class="p-3 bg-indigo-50 rounded-xl border-2 border-indigo-200">
    <span class="text-xs font-bold text-indigo-700 bg-indigo-100 px-2 py-0.5 rounded">HÀNG TRĂM</span>
    <div class="text-2xl font-black text-indigo-600 my-1">300</div>
    <p class="text-xs font-bold text-gray-500">$3 \times 100$</p>
  </div>
  <div v-click class="p-3 bg-amber-50 rounded-xl border-2 border-amber-200">
    <span class="text-xs font-bold text-amber-700 bg-amber-100 px-2 py-0.5 rounded">HÀNG CHỤC</span>
    <div class="text-2xl font-black text-amber-600 my-1">30</div>
    <p class="text-xs font-bold text-gray-500">$3 \times 10$</p>
  </div>
  <div v-click class="p-3 bg-emerald-50 rounded-xl border-2 border-emerald-200">
    <span class="text-xs font-bold text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded">HÀNG ĐƠN VỊ</span>
    <div class="text-2xl font-black text-emerald-600 my-1">3</div>
    <p class="text-xs font-bold text-gray-500">$3 \times 1$</p>
  </div>
</div>

<div v-click class="p-3 bg-indigo-600 text-white rounded-xl text-center font-bold text-base mt-4 shadow-md">
  $$333 = 300 + 30 + 3 = 3 \times 100 + 3 \times 10 + 3$$
</div>

---
layout: default
---

# 📐 Công Thức Cấu Tạo Số $\overline{ab}$ & $\overline{abc}$

<div class="space-y-3 mt-4">

<div v-click class="p-3 bg-white rounded-xl border-l-4 border-indigo-600 shadow-sm">
  <div class="font-bold text-indigo-900 text-sm">Số có 2 chữ số: $\overline{ab}$ $(a \ne 0)$</div>
  <div class="text-base font-black text-indigo-600 my-1">$$\overline{ab} = a \times 10 + b$$</div>
  <div class="text-xs text-gray-500">Ví dụ: $47 = 4 \times 10 + 7 = 40 + 7$</div>
</div>

<div v-click class="p-3 bg-white rounded-xl border-l-4 border-pink-500 shadow-sm">
  <div class="font-bold text-pink-900 text-sm">Số có 3 chữ số: $\overline{abc}$ $(a \ne 0)$</div>
  <div class="text-base font-black text-pink-600 my-1">$$\overline{abc} = a \times 100 + b \times 10 + c$$</div>
  <div class="text-xs text-gray-500">Ví dụ: $258 = 2 \times 100 + 5 \times 10 + 8 = 200 + 50 + 8$</div>
</div>

</div>

<div v-click class="p-2.5 bg-amber-50 rounded-xl border border-amber-200 text-xs text-amber-900 mt-3">
  💡 <i>Gạch ngang trên đầu $\overline{ab}$ để phân biệt với phép nhân $a \times b$ đó Thảo nhé!</i>
</div>

---
layout: center
class: text-center bg-gradient-to-br from-emerald-100 to-teal-200
---

<div class="text-5xl mb-3">☕ 🧘‍♀️ 🍎</div>

# GIẢI LAO 5 - 10 PHÚT NHÉ!

<p class="text-sm font-bold text-emerald-900 mt-2 max-w-md mx-auto">
  Phương Thảo hãy uống một ngụm nước, vươn vai thư giãn mắt.<br>
  Chặng tiếp theo bố con mình cùng đến với: <b>Mật mã đế chế La Mã cổ đại</b>!
</p>

---
layout: default
---

# 🏛️ 3 Ký Tự Gốc Từ Bàn Tay 🖐️

<div class="grid grid-cols-3 gap-4 mt-6 text-center">

<div v-click class="p-4 rounded-2xl bg-indigo-50 border-2 border-indigo-200">
  <div class="text-4xl mb-1">☝️</div>
  <div class="text-4xl font-black text-indigo-700 my-1">I</div>
  <h4 class="font-bold text-indigo-900 text-sm">Số 1</h4>
  <p class="text-xs text-gray-500">1 Ngón tay trỏ</p>
</div>

<div v-click class="p-4 rounded-2xl bg-pink-50 border-2 border-pink-200">
  <div class="text-4xl mb-1">✌️</div>
  <div class="text-4xl font-black text-pink-600 my-1">V</div>
  <h4 class="font-bold text-pink-900 text-sm">Số 5</h4>
  <p class="text-xs text-gray-500">Bàn tay chữ V (5 ngón)</p>
</div>

<div v-click class="p-4 rounded-2xl bg-amber-50 border-2 border-amber-200">
  <div class="text-4xl mb-1">🙌</div>
  <div class="text-4xl font-black text-amber-600 my-1">X</div>
  <h4 class="font-bold text-amber-900 text-sm">Số 10</h4>
  <p class="text-xs text-gray-500">2 Bàn tay chéo ($5+5$)</p>
</div>

</div>

<div v-click class="p-3 bg-indigo-50 rounded-xl border border-indigo-200 text-xs text-indigo-900 mt-4 text-center">
  🌐 <i>Mở rộng thêm: $\text{L} = 50$, $\text{C} = 100$, $\text{D} = 500$, $\text{M} = 1000$.</i>
</div>

---
layout: default
---

# 🔑 Quy Tắc: "Phải Cộng (+) - Trái Trừ (-)"

<div class="grid grid-cols-2 gap-4 mt-4">

<div v-click class="p-4 bg-emerald-50 rounded-2xl border-2 border-emerald-200">
  <span class="px-3 py-1 bg-emerald-100 text-emerald-800 rounded-full font-bold text-xs">👉 BÊN PHẢI = CỘNG (+)</span>
  <div class="text-xs text-gray-800 space-y-1 mt-3 leading-relaxed">
    <p>• $\text{VI} = 5 + 1 = \mathbf{6}$</p>
    <p>• $\text{VII} = 5 + 2 = \mathbf{7}$</p>
    <p>• $\text{VIII} = 5 + 3 = \mathbf{8}$</p>
    <p>• $\text{XI} = 10 + 1 = \mathbf{11}$</p>
  </div>
</div>

<div v-click class="p-4 bg-rose-50 rounded-2xl border-2 border-rose-200">
  <span class="px-3 py-1 bg-rose-100 text-rose-800 rounded-full font-bold text-xs">👈 BÊN TRÁI = TRỪ (-)</span>
  <div class="text-xs text-gray-800 space-y-1 mt-3 leading-relaxed">
    <p>• $\text{IV} = 5 - 1 = \mathbf{4}$</p>
    <p>• $\text{IX} = 10 - 1 = \mathbf{9}$</p>
    <p>• $\text{XL} = 50 - 10 = \mathbf{40}$</p>
    <p>• $\text{XC} = 100 - 10 = \mathbf{90}$</p>
  </div>
</div>

</div>

<div v-click class="p-3 bg-amber-50 rounded-xl border border-amber-200 text-xs text-amber-900 mt-4 text-center">
  ⚠️ <b>Quy tắc sống còn:</b> Không bao giờ lặp lại quá 3 lần cùng 1 ký tự ($\text{III}=3$, nhưng 4 là $\text{IV}$, không viết $\text{IIII}$).
</div>

---
layout: default
---

# 📊 Bảng Tra Cứu Số La Mã Từ 1 Đến 30

<div class="flex flex-wrap gap-2 justify-center my-3">
  <span class="px-2.5 py-1 bg-white border-2 border-amber-500 rounded-lg text-xs font-bold text-amber-900">I (1)</span>
  <span class="px-2.5 py-1 bg-white border-2 border-amber-500 rounded-lg text-xs font-bold text-amber-900">II (2)</span>
  <span class="px-2.5 py-1 bg-white border-2 border-amber-500 rounded-lg text-xs font-bold text-amber-900">III (3)</span>
  <span class="px-2.5 py-1 bg-rose-100 border-2 border-rose-500 rounded-lg text-xs font-black text-rose-800">IV (4)</span>
  <span class="px-2.5 py-1 bg-white border-2 border-amber-500 rounded-lg text-xs font-bold text-amber-900">V (5)</span>
  <span class="px-2.5 py-1 bg-white border-2 border-amber-500 rounded-lg text-xs font-bold text-amber-900">VI (6)</span>
  <span class="px-2.5 py-1 bg-white border-2 border-amber-500 rounded-lg text-xs font-bold text-amber-900">VII (7)</span>
  <span class="px-2.5 py-1 bg-white border-2 border-amber-500 rounded-lg text-xs font-bold text-amber-900">VIII (8)</span>
  <span class="px-2.5 py-1 bg-rose-100 border-2 border-rose-500 rounded-lg text-xs font-black text-rose-800">IX (9)</span>
  <span class="px-2.5 py-1 bg-indigo-100 border-2 border-indigo-500 rounded-lg text-xs font-black text-indigo-800">X (10)</span>
</div>

<div class="grid grid-cols-2 gap-3 mt-4" v-click>
  <div class="p-3 bg-indigo-50 rounded-xl border border-indigo-200 text-xs leading-relaxed">
    <b class="text-indigo-900">Từ 11 đến 20 (Thêm X vào trước):</b><br>
    $\text{XI}(11), \text{XII}(12), \text{XIII}(13), \text{XIV}(14), \text{XV}(15), \dots, \text{XX}(20)$
  </div>
  <div class="p-3 bg-emerald-50 rounded-xl border border-emerald-200 text-xs leading-relaxed">
    <b class="text-emerald-900">Từ 21 đến 30 (Thêm XX vào trước):</b><br>
    $\text{XXI}(21), \text{XXII}(22), \dots, \text{XXIX}(29), \text{XXX}(30)$
  </div>
</div>

---
layout: default
---

# 🎮 Thám Hiểm Game: Mở Khóa Rương Báu

<div class="p-3.5 bg-indigo-50 rounded-2xl border-2 border-indigo-200 text-sm mb-4">
  🗝️ Để mở rương kho báu, Phương Thảo hãy đổi 3 mật mã sau sang số tự nhiên: <br>
  <b>1. $\text{XIV}$</b> = ? &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 
  <b>2. $\text{XXVI}$</b> = ? &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 
  <b>3. $\text{XXIX}$</b> = ?
</div>

<div v-click class="p-3.5 bg-emerald-50 rounded-2xl border-2 border-emerald-200 text-sm space-y-1.5">
  <h4 class="font-bold text-emerald-900 text-sm">✅ Lời giải mở rương:</h4>
  <p>1. $\text{XIV} = 10 + (5 - 1) = \mathbf{14}$</p>
  <p>2. $\text{XXVI} = 20 + 5 + 1 = \mathbf{26}$</p>
  <p>3. $\text{XXIX} = 20 + (10 - 1) = \mathbf{29}$</p>
</div>

---
layout: default
class: bg-gradient-to-br from-indigo-900 to-indigo-950 text-white
---

# ✨ TỔNG KẾT: 3 ĐIỀU CỐT LÕI BỎ TÚI

<div class="space-y-3 mt-6 max-w-xl mx-auto">

<div class="p-3 bg-white/10 rounded-xl backdrop-blur-sm border border-white/20">
  <b class="text-amber-300 text-sm">1. TIA SỐ:</b> 
  <span class="text-xs text-gray-200 block mt-0.5">Trái nhỏ hơn, Phải lớn hơn. Số liền trước ($-1$), liền sau ($+1$).</span>
</div>

<div class="p-3 bg-white/10 rounded-xl backdrop-blur-sm border border-white/20">
  <b class="text-amber-300 text-sm">2. CẤU TẠO SỐ:</b> 
  <span class="text-xs text-gray-200 block mt-0.5">$\overline{ab} = 10a + b$ &nbsp;|&nbsp; $\overline{abc} = 100a + 10b + c$.</span>
</div>

<div class="p-3 bg-white/10 rounded-xl backdrop-blur-sm border border-white/20">
  <b class="text-amber-300 text-sm">3. SỐ LA MÃ:</b> 
  <span class="text-xs text-gray-200 block mt-0.5">$\text{I}(1), \text{V}(5), \text{X}(10)$. Bên Phải Cộng (+), Bên Trái Trừ (-).</span>
</div>

</div>

---
layout: default
---

# 🏆 Phiếu Thử Thách Nhận Điểm 10

<div class="space-y-2.5 mt-4">

<div class="p-2.5 bg-indigo-50 rounded-xl border border-indigo-200 text-xs">
  <b>Câu 1:</b> Tìm số liền trước và số liền sau của số <b>$999$</b>?
</div>

<div class="p-2.5 bg-pink-50 rounded-xl border border-pink-200 text-xs">
  <b>Câu 2:</b> Viết các số sau bằng chữ số La Mã: <b>$8$</b>, <b>$19$</b>, <b>$24$</b>.
</div>

<div class="p-2.5 bg-emerald-50 rounded-xl border border-emerald-200 text-xs">
  <b>Câu 3:</b> Điền Đúng (Đ) hoặc Sai (S): <br>
  a) Số $0$ không có số liền trước trong $\mathbb{N}$. &nbsp;&nbsp;&nbsp;&nbsp; 
  b) $\text{IX} = 11$. &nbsp;&nbsp;&nbsp;&nbsp; 
  c) $\text{XXIV} = 24$.
</div>

</div>

<div v-click class="mt-4 text-center">
  <span class="px-6 py-2 bg-amber-100 text-amber-900 border-2 border-amber-300 rounded-full font-black text-sm shadow-sm inline-block">
    🎉 CHÚC MỪNG PHƯƠNG THẢO HOÀN THÀNH XUẤT SẮC BÀI 2! 🎉
  </span>
</div>
