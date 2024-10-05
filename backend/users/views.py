from django.shortcuts import HttpResponse

def notfound(request):
    return HttpResponse('Hi TradeCraft here, Backend Working')
