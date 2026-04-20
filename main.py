import sys
import threading
from PyQt5.QtWidgets import QApplication, QSystemTrayIcon, QMenu, QAction
from overlay import OverlayWidget

def register_hotkeys(overlay):
    try:
        import keyboard
        keyboard.add_hotkey('ctrl+shift+space', overlay.toggle_visibility)
        print("[Hotkey] Ctrl+Shift+Space registered")
        keyboard.wait()
    except ImportError as e:
        print(f"[Hotkey] Warning: {e}")
        print("[Hotkey] Run with sudo for hotkey support")

def main():
    app = QApplication(sys.argv)
    app.setQuitOnLastWindowClosed(False)

    overlay = OverlayWidget()
    overlay.show()

    tray = QSystemTrayIcon()
    tray.setIcon(app.style().standardIcon(app.style().SP_ComputerIcon))
    tray.setToolTip("NeoAgent")

    menu = QMenu()
    show_action = QAction("Show Overlay")
    show_action.triggered.connect(overlay.show)
    hide_action = QAction("Hide Overlay")
    hide_action.triggered.connect(overlay.hide)
    quit_action = QAction("Quit")
    quit_action.triggered.connect(app.quit)

    menu.addAction(show_action)
    menu.addAction(hide_action)
    menu.addSeparator()
    menu.addAction(quit_action)
    tray.setContextMenu(menu)
    tray.show()

    hotkey_thread = threading.Thread(
        target=register_hotkeys,
        args=(overlay,),
        daemon=True
    )
    hotkey_thread.start()

    print("[NeoAgent] Running!")
    sys.exit(app.exec_())

if __name__ == "__main__":
    main()
