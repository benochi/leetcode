/*
Given the head of a linked list, remove the nth node from the end of the list and return its head.
*/
var removeNthFromEnd = function(head, n) {
    let newList = new ListNode(0);
    newList.next = head;
    
    let fast = newList;
    let slow = newList;
    
  //move fast pointer to n+1 to account for dummy node
    for(let i = 0; i <= n; i++){
        fast = fast.next;
    }
    // move both pointers until fast is at the end(slow pointer has reached (end - n - 1) )
    while(fast != null){
        fast = fast.next
        slow = slow.next
    }
    
    //Skip n
    slow.next = slow.next.next;
    
    return newList.next
};
