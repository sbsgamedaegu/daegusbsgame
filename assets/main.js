// 모바일 메뉴
document.querySelectorAll('.menu-btn').forEach(function(b){
  b.addEventListener('click',function(){document.querySelector('.mnav').classList.toggle('open');});
});
// 교육과정 필터
document.querySelectorAll('.tabs').forEach(function(tabs){
  tabs.addEventListener('click',function(e){
    var t=e.target.closest('button'); if(!t) return;
    tabs.querySelectorAll('button').forEach(function(x){x.classList.remove('on');});
    t.classList.add('on');
    var f=t.dataset.f;
    document.querySelectorAll('.ccard').forEach(function(c){
      c.classList.toggle('hide', f!=='all' && c.dataset.cat.indexOf(f)<0);
    });
  });
});
// 나에게 맞는 수업 찾기
(function(){
  var box=document.querySelector('.fbox'); if(!box) return;
  var pick={};
  box.querySelectorAll('.opts').forEach(function(g){
    g.addEventListener('click',function(e){
      var b=e.target.closest('button'); if(!b) return;
      g.querySelectorAll('button').forEach(function(x){x.classList.remove('on');});
      b.classList.add('on'); pick[g.dataset.q]=b.dataset.v;
    });
  });
  box.querySelector('.go').addEventListener('click',function(){
    var res=box.querySelector('.fres');
    var field=pick.field||'art', goal=pick.goal||'job', lv=pick.level||'new';
    var map={
      art:['게임원화·일러스트학과','/daegu-game-art/'],
      dev:['게임프로그래밍학과','/daegu-coding/'],
      plan:['게임기획학과','/courses/#plan'],
      toon:['웹툰·웹소설학과','/daegu-webtoon/'],
      solo:['1인 게임개발반','/courses/#solo']
    };
    var c=map[field];
    var g={job:'취업 포트폴리오 중심',exam:'목표 대학 입시 맞춤',hobby:'기초·취미 중심'}[goal];
    var l={new:'가장 기초 단계부터',some:'현재 실력 진단 후 중급 단계부터',work:'진행 중인 작품을 완성하는 방향으로'}[lv];
    res.innerHTML='추천: <b>'+c[0]+'</b><br>'+g+'으로, '+l+' 시작하는 것을 권해요.<br><br><a class="btn btn-primary" href="tel:0534257004">전화로 상담하기 053-425-7004</a> <a class="more" style="margin-left:10px" href="'+c[1]+'">과정 보기 ↗</a>';
    res.classList.add('show');
  });
})();
