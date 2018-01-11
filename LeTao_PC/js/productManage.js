$(function () {
  var getProductData = function (pageNum) {
    $.ajax({
      type: 'get',
      url: ' /product/queryProductDetailList',
      data: {
        page: pageNum || 1,
        pageSize: 5
      },
      success: function (data) {
        // console.log(data);
        var productResult = template('product-template', data);
        $('tbody').html(productResult);
      }
    })
  }
  getProductData();
  initUpload();




  $('#productform').bootstrapValidator({
    feedbackIcons: {
      valid: 'glyphicon glyphicon-ok',
      invalid: 'glyphicon glyphicon-remove',
      validating: 'glyphicon glyphicon-refresh'
    },
    fields: {
      // 字段名是name属性的值
      proName: {
        validators: {
          notEmpty: {
            message: '商品名称不能为空'
          }
        }
      },
      proDesc: {
        validators: {
          notEmpty: {
            message: '商品描述不能为空'
          }
        }
      },
      num: {
        validators: {
          notEmpty: {
            message: '商品库存不能为空'
          }
        }
      },
      price: {
        validators: {
          notEmpty: {
            message: '商品价格不能为空'
          }
        }
      },
      oldPrice: {
        validators: {
          notEmpty: {
            message: '商品原价不能为空'
          }
        }
      }, 
      size: {
        validators: {
          notEmpty: {
            message: '商品尺码不能为空'
          }
        }
      }
    }
  }).on('success.form.bv', function (e) {
    // Prevent form submission
    e.preventDefault();
    // Get the form instance
    var $form = $(e.target);
    // console.log($form.serialize());
    // console.log($form); 
    // serialize(); 序列化 
    // send() 对象-- 这是自己传
    // http协议要的是什么 键值对  key=value&key1=value1
    // Get the BootstrapValidator instance
    // console.log(1);
    // 获取参数
    // proName  产品名称 
    // proDesc  产品描述
    // num      用户库存
    // price    价格
    // oldPrice 老价格   
    // size     产品尺寸   
    // brandId  品牌归属 虽然没有我们采取自己随便定一个数据库中有的brandId
    // pic     图片数组
    var data = $form.serialize();
    // console.log(data);
    // http协议要的是什么格式的东西key=value
    // 遍历数组
    $.each(picList,function(i,item){
      // console.log(i,item);
      data+='&picName'+(i+1)+'='+item.picName+'&picAddr'+(i+1)+'='+item.picAddr;
    })

    // console.log(data);

  //   proName=123
  //  &proDesc=123
  //  &num=123
  //  &price=123
  //  &oldPrice=123
  //  &size=123
  //  &picName01=0988be20-c77f-11e7-be71-8d1a6d00f514.jpg
  //  &picAddr01=/upload/product/0988be20-c77f-11e7-be71-8d1a6d00f514.jpg
  //  &picName11=0abd4680-c77f-11e7-be71-8d1a6d00f514.jpg
  //  &picAddr11=/upload/product/0abd4680-c77f-11e7-be71-8d1a6d00f514.jpg
  //  &picName21=0c2c18c0-c77f-11e7-be71-8d1a6d00f514.jpg
  //  &picAddr21=/upload/product/0c2c18c0-c77f-11e7-be71-8d1a6d00f514.jpg
 
    data = data+'&brandId=4';
    // console.log(data);

    $.ajax({
      type:'post',
      url:'/product/addProduct',
      data: data,
      success:function(data){
        console.log(data);

        $('#product-modal').modal('hide');
        getProductData();
      }
    })
  });





})



// 2.上传 
var picList =[];
var initUpload = function () {
  // 下面的id是type=file类型的input的id
  $("#pic").fileupload({
    // 找到上传图片的接口
    url: "/product/addProductPic",
    done: function (e, data) {
      // console.log(data);
      $('.fileupload').append('<img width="50" height="auto" src="'+data.result.picAddr+'" alt="">');
      // console.log(data.result);
      picList.push(data.result);
    }
  })
}