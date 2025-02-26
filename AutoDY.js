// 显示开始提示
toast('Hello, AutoX.js');
// 暂停 1 秒，让用户查看提示
sleep(1000);

// 打开抖音
app.launch('com.ss.android.ugc.aweme');
// 等待抖音应用启动，这里等待 5 秒
sleep(5000);

// 标记是否暂停自动刷视频，初始为 false
var isPaused = false;

// 创建悬浮窗
var floatingWindow = floaty.window(
    <vertical padding="10dp" gravity="center">
        <button id="pauseButton" text="暂停" layout_weight="1" margin="5dp"/>
        <button id="resumeButton" text="运行" layout_weight="1" margin="5dp"/>
    </vertical>
);

// 设置悬浮窗位置
floatingWindow.setPosition(0, 0);

// 给暂停按钮添加点击事件监听器
floatingWindow.pauseButton.click(function () {
    isPaused = true;
    toast('已暂停自动刷视频');
});

// 给运行按钮添加点击事件监听器
floatingWindow.resumeButton.click(function () {
    isPaused = false;
    toast('继续自动刷视频');
});

// 定义循环次数，这里设置为 10 次
var i = 0;
while (i < 10) {
    if (!isPaused) {
        // 模拟上滑手势，划到下一条视频
        gesture(360, [200, 1000], [220, 100]);
        // 停留 5 秒，让用户观看当前视频
        sleep(5000);
        // 循环计数器加 1
        i++;
    } else {
        // 如果暂停，等待一段时间后再次检查状态
        sleep(100);
    }
}

// 关闭悬浮窗
floatingWindow.close();
// 暂停 1 秒，给用户缓冲时间
sleep(1000);
// 显示结束提示
toast('end, AutoX.js');