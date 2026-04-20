import sys
from PyQt5.QtWidgets import QApplication, QWidget, QLabel, QVBoxLayout
from PyQt5.QtCore import Qt

class OverlayWidget(QWidget):
    def __init__(self):
        super().__init__()
        self.initUI()

    def initUI(self):
        self.setWindowFlags(
            Qt.FramelessWindowHint |
            Qt.WindowStaysOnTopHint |
            Qt.Tool
        )
        self.setAttribute(Qt.WA_TranslucentBackground)
        self.setGeometry(100, 100, 600, 400)

        layout = QVBoxLayout()
        self.label = QLabel("NeoAgent Ready...")
        self.label.setStyleSheet(
            "color: white; font-size: 16px;"
            "background: rgba(0,0,0,180);"
            "padding: 10px; border-radius: 8px;"
        )
        layout.addWidget(self.label)
        self.setLayout(layout)

    def show_text(self, text):
        self.label.setText(text)
        self.show()

    def toggle_visibility(self):
        if self.isVisible():
            self.hide()
        else:
            self.show()
