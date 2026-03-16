// منع النسخ واليمين
document.addEventListener('contextmenu', (e) => e.preventDefault());
document.addEventListener('copy', (e) => e.preventDefault());
document.addEventListener('cut', (e) => e.preventDefault());

// منع اختصارات لوحة المفاتيح
document.addEventListener('keydown', (e) => {
    if ((e.ctrlKey || e.metaKey) && (e.key === 'c' || e.key === 'x' || e.key === 'v')) {
        e.preventDefault();
    }
    if (e.key === 'F12' || (e.ctrlKey && e.shiftKey && e.key === 'I')) {
        e.preventDefault();
    }
});

// التنقل بين الصفحات
function showPage(pageName) {
    // إخفاء جميع الصفحات
    const pages = document.querySelectorAll('.page');
    pages.forEach(page => page.classList.remove('active'));
    
    // إظهار الصفحة المختارة
    const page = document.getElementById(pageName);
    if (page) {
        page.classList.add('active');
    }
}

// تحديد الصفحة الافتراضية
document.addEventListener('DOMContentLoaded', () => {
    showPage('home');
});
