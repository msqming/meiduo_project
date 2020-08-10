from django.urls import path, re_path
from . import views

urlpatterns = [
    # 图形验证码
    re_path(r'^image_code/(?P<uuid>[\w-]+)/$', views.ImageCodeView.as_view()),

]
