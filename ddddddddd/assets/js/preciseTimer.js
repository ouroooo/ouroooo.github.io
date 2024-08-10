// preciseTimer.js 文件内容
document.addEventListener('DOMContentLoaded', function() {
    var countdownElement = document.getElementById('countdown');
    var timerTypeElement = document.getElementById('timerType');
    var targetDate = new Date('2023-12-08T21:22:59'); // 纪念日日期和时间，格式为 YYYY-MM-DDTHH:mm:ss
    var isCountdown = false; // 设置为 true 进行倒计时，设置为 false 记录过去的时间

    function updateTimer() {
        var now = new Date();
        var distance = isCountdown ? targetDate - now : now - targetDate;

        if (isCountdown && distance < 0) {
            countdownElement.innerHTML = "纪念日到了！";
            timerTypeElement.textContent = "倒计时";
            return; // 倒计时结束
        } else if (!isCountdown && distance < 0) {
            countdownElement.innerHTML = "时间设置错误，应该是过去的日期。";
            timerTypeElement.textContent = "时间错误";
            return; // 时间设置错误
        }

        // 计算天数、小时数、分钟数和秒数
        var days = Math.floor(distance / (1000 * 60 * 60 * 24));
        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor(distance % (1000 * 60) / 1000);

        // 显示结果
        countdownElement.innerHTML = days + "天 " + hours + "小时 "
            + minutes + "分钟 " + seconds + "秒 ";

        // 每1000毫秒更新一次
        setTimeout(updateTimer, 1000);
    }

    // 根据 isCountdown 的值设置页面标题
    timerTypeElement.textContent = isCountdown ? "倒计时" : "";

    // 启动计时器
    updateTimer();
});