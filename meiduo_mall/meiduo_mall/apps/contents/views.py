from django.shortcuts import render
from django.views import View


class IndexView(View):
    """首页广告"""

    def get(self, request, *args, **kwargs):
        """提供首页广告页面"""
        return render(request, 'index.html')
