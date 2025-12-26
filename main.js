// Ẩn loading khi trang đã load xong
window.addEventListener('load', function() {
    const loadingOverlay = document.getElementById('loadingOverlay');
    if (loadingOverlay) {
        loadingOverlay.classList.remove('active');
    }
});

// Đợi DOM load xong hoàn toàn
document.addEventListener('DOMContentLoaded', function() {
    // #region agent log
    fetch('http://127.0.0.1:7243/ingest/b934b5b8-ec53-4ce3-8055-6e0e494169bb',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'main.js:2',message:'DOMContentLoaded fired',data:{timestamp:Date.now()},timestamp:Date.now(),sessionId:'debug-session',runId:'run1',hypothesisId:'A'})}).catch(()=>{});
    // #endregion
    
    // Lấy các elements
    const button = document.getElementById('clickButton');
    const message = document.getElementById('message');
    const countSpan = document.getElementById('count');
    const countdown = document.getElementById('countdown');
    
    // #region agent log
    fetch('http://127.0.0.1:7243/ingest/b934b5b8-ec53-4ce3-8055-6e0e494169bb',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'main.js:8',message:'Elements retrieved',data:{buttonExists:!!button,messageExists:!!message,countSpanExists:!!countSpan,countdownExists:!!countdown},timestamp:Date.now(),sessionId:'debug-session',runId:'run1',hypothesisId:'B'})}).catch(()=>{});
    // #endregion
    
    let clickCount = 0;
    const pageLoadTime = Date.now();
    const redirectDelay = 3000; // 3 giây
    
    // Hàm hiển thị loading
    function showLoading() {
        const loadingOverlay = document.getElementById('loadingOverlay');
        if (loadingOverlay) {
            loadingOverlay.classList.add('active');
        }
    }

    // Hàm ẩn loading
    function hideLoading() {
        const loadingOverlay = document.getElementById('loadingOverlay');
        if (loadingOverlay) {
            loadingOverlay.classList.remove('active');
        }
    }

    // Hàm xử lý khi button được click
    function handleButtonClick() {
        // #region agent log
        fetch('http://127.0.0.1:7243/ingest/b934b5b8-ec53-4ce3-8055-6e0e494169bb',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'main.js:20',message:'handleButtonClick called - redirecting',data:{clickCount:clickCount+1,timeSincePageLoad:Date.now()-pageLoadTime},timestamp:Date.now(),sessionId:'debug-session',runId:'run1',hypothesisId:'C'})}).catch(()=>{});
        // #endregion
        
        clickCount++;
        countSpan.textContent = clickCount;
        
        // Hiển thị loading trước khi chuyển trang
        showLoading();
        
        // Chuyển sang trang shopping với delay nhỏ để loading hiển thị mượt
        setTimeout(() => {
            window.location.href = '/shopping.html';
        }, 300);
    }
    
    // Thêm event listener cho button
    button.addEventListener('click', handleButtonClick);
    
    // Đồng hồ đếm ngược và tự động redirect
    let remainingTime = 3;
    countdown.textContent = remainingTime;
    
    // #region agent log
    fetch('http://127.0.0.1:7243/ingest/b934b5b8-ec53-4ce3-8055-6e0e494169bb',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'main.js:35',message:'Countdown timer started',data:{initialTime:remainingTime,redirectDelay:redirectDelay},timestamp:Date.now(),sessionId:'debug-session',runId:'run1',hypothesisId:'A'})}).catch(()=>{});
    // #endregion
    
    const countdownInterval = setInterval(function() {
        remainingTime--;
        
        // #region agent log
        fetch('http://127.0.0.1:7243/ingest/b934b5b8-ec53-4ce3-8055-6e0e494169bb',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'main.js:40',message:'Countdown updated',data:{remainingTime:remainingTime,timeSincePageLoad:Date.now()-pageLoadTime},timestamp:Date.now(),sessionId:'debug-session',runId:'run1',hypothesisId:'A'})}).catch(()=>{});
        // #endregion
        
        if (remainingTime > 0) {
            countdown.textContent = remainingTime;
        } else {
            countdown.textContent = '0';
            clearInterval(countdownInterval);
            
            // #region agent log
            fetch('http://127.0.0.1:7243/ingest/b934b5b8-ec53-4ce3-8055-6e0e494169bb',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'main.js:48',message:'Countdown finished - auto clicking button',data:{timeSincePageLoad:Date.now()-pageLoadTime},timestamp:Date.now(),sessionId:'debug-session',runId:'run1',hypothesisId:'A'})}).catch(()=>{});
            // #endregion
            
            message.className = 'info';
            message.textContent = '⏳ Đang tự động chuyển trang...';
            button.click(); // Tự động click button để chuyển trang
        }
    }, 1000); // Cập nhật mỗi 1 giây
    
});