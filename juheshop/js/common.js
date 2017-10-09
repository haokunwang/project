

var class_hotarry= [
        {CategoryName:["台式整机","台式整机"]},
        {CategoryName:["卡纸标签机","条码打印机"]},
        {CategoryName:["刀片","毛笔"]},
        {CategoryName:["电脑插座","按摩椅"]},
        {CategoryName:["台式整机","台式整机"]},
        {CategoryName:["卡纸标签机","条码打印机"]},
        {CategoryName:["刀片","毛笔"]},
        {CategoryName:["电脑插座","按摩椅"]},
        {CategoryName:["台式整机","台式整机"]},
        {CategoryName:["油墨"]},
        {CategoryName:["卡纸标签机","条码打印机"]},
        {CategoryName:["刀片","毛笔"]},
        {CategoryName:["电脑插座","按摩椅"]}
    ];
var classarry = [
    [{CategoryName:["手机及配件"],CategoryChild:["智能手机","功能手机"]}],
    [{CategoryName:["办公设备"],CategoryChild:["碎纸机","扫描仪"]}],
    [{CategoryName:["装订用品"],CategoryChild:["订书机票夹","长尾夹"]}],
    [{CategoryName:["卫浴用品"],CategoryChild:["碎纸机","扫描仪"]}],
    [{CategoryName:["办公设备"],CategoryChild:["手纸箱","浴缸"]}],
    [{CategoryName:["手机及配件"],CategoryChild:["智能手机","功能手机"]}],
    [{CategoryName:["办公设备"],CategoryChild:["碎纸机","扫描仪"]}],
    [{CategoryName:["装订用品"],CategoryChild:["订书机票夹","长尾夹"]}],
    [{CategoryName:["卫浴用品"],CategoryChild:["碎纸机","扫描仪"]}],
    [{CategoryName:["办公设备"],CategoryChild:["手纸箱","浴缸"]}],
    [{CategoryName:["化学制品"],CategoryChild:["油墨"]}],
    [{CategoryName:["手机及配件"],CategoryChild:["智能手机","功能手机"]}],
    [{CategoryName:["办公设备"],CategoryChild:["碎纸机","扫描仪"]}]
];
var class_produtarry = [
    {ProductName:"联想 ThinkPad T470 i5-6300 笔记本电脑",ProductImg:"../img/ms-1.png"},
    {ProductName:"惠普/HP  P14-al 139TX  14英寸轻薄笔记本电脑",ProductImg:"../img/ms-2.png"}
];
function addClasshtml(index){
    var classhtml = "";
    var arr = classarry[index];
    for(var i = 0;i < arr.length;i++){
        classhtml += '<dl><dt><a target="_blank" href="">' + arr[i].CategoryName + '</a></dt><dd>';
        for (var j = 0;j < arr[i].CategoryChild.length;j++) {
            classhtml += '<a target="_blank" href="">' + arr[i].CategoryChild[j] + '</a>';
        }
    classhtml += '</dd></dl>';
    }
    return classhtml
}

function addClass_hotarry(index){
    var classhtml = "";
    var arr = class_hotarry[index].CategoryName;
    for (var i = 0;i < arr.length;i++) {
        classhtml += '<a target="_blank" href="">' + arr[i] + '</a>';
    }
    return classhtml
}

function addClass_produtarry(index){
    var classhtml = "";
    index = 0;
    var arr = class_produtarry[index];

    classhtml += '<div class="little littles"><div class="l-cover"></div>'

    for (var i = 0;i < arr.length;i++) {
    classhtml += '<a target="_blank" href="" title="' + arr[i].ProductName + '">';
    classhtml += '<p class="img-name">' + arr[i].ProductName + '</p><img src="../img/' + arr[i].ProductImg + '"/></a>';
    }
    classhtml +='</div>'
    return classhtml
}

/*顶部菜单下拉*/
    $('.w_right li').hover(function () {
        $(this).find('.w_right_pic').addClass('w_right_pic_top');
        $(this).find('span').css('color', '#c91623');
        $(this).addClass('w_right_li');
        $(this).find('.w_right_a_list').show();
        $(this).find('.w_right_ma').show();
    }, function () {
        $(this).find('.w_right_pic').removeClass('w_right_pic_top');
        $(this).find('span').css('color', '');
        $(this).removeClass('w_right_li');
        $(this).find('.w_right_a_list').hide();
        $(this).find('.w_right_ma').hide();
    });

/*全部商品分类*/
    $('#btnallclass').parent().hover(function () {
        $('#allclass').show();
    }, function () {
        if ($('#btnallclass').attr('data_where') == '' && $('#allclass').is(':visible')) {
            $('#allclass').hide();
        }
    });
    if ($('#btnallclass').attr('data_where') == '') {
        $('#allclass').hide();
    }


    var classlilength = $('#allclass li').length;
    var class_yc_timer;
    $('#allclass li').hover(function () {
        $('#allclass li').each(function () {
            $(this).find('i').css('background', $(this).find('i').attr('data_def'));
        });
        $(this).find('i').css('background', $(this).find('i').attr('data_hover'));
        $(this).addClass('classhover').siblings().removeClass('classhover');
    /*加载详细*/
        var cindex = $(this).index();
        $('#classdetail .sort-btn').html(addClass_hotarry(cindex));
        $('#classdetail .cate-list').html(addClasshtml(cindex));
        $('#classdetail .two_show').html(addClass_produtarry(cindex));
        $('#classdetail').show();
    });

    $('#allclass').mouseleave(function () {
        $('#allclass li').each(function () {
            $(this).find('i').css('background', $(this).find('i').attr('data_def'));
        });
        $('#allclass li').removeClass("classhover");
        $('#classdetail').hide();
    });


