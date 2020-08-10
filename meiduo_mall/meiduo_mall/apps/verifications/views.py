from django.shortcuts import render
from django.views import View
from django import http
from django_redis import get_redis_connection

from verifications.libs.captcha.captcha import captcha


class ImageCodeView(View):
    """图形验证码"""

    def get(self, request, uuid):
        """
        :param uuid: 通用唯一标识码
        :return: image/jpg
        """
        # 生成图形验证码
        text, image = captcha.generate_captcha()
        # 保持图形验证码
        redis_conn = get_redis_connection('verify_code')
        redis_conn.setex('img_%s' % uuid, 300, text)
        # 响应图形验证码
        return http.HttpResponse(image, content_type='image/jpg')
