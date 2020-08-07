from django.shortcuts import render
from django.views import View


class RegisterView(View):
    """用户注册"""

    def get(self, request, *args, **kwargs):
        """提供注册页面"""
        return render(request, 'register.html')

    def post(self, request, *args, **kwargs):
        """新用户注册"""
        pass
