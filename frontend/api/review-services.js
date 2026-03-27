

export function getUserReview() {
    
}




// input: thông tin về sự an toàn cần được xem xét
// output: số điểm đánh giá an toàn trên thang 100
// dữ liệu giả: luôn trả về 50
export function getScore(infor) {
    return 50;
}

// input: tiêu chí và địa điểm cần được đánh giá độ an toàn
// output: thông tin liên quan đến sự an toàn về tiêu chí của địa điẻm đó
export function getDetialInfor(names, places) {
    // thực hiện call LLM với yêu cầu tiêu chí nằm ở đây
    return [{name: 'securyity', infor: ['pickpocket']},
            {name: 'weather', infor: ['great']},
            {name: 'bio', infor: ['some natives plants and small animals', 'the pass to submit tourist may encounter with monkeys']},
            {name: 'road', infor: ['multiple road with vary choice']}]
}